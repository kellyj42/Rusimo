"use server";

import twilio from "twilio";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long").trim(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[0-9\s\-()]+$/, "Please enter a valid phone number").optional().or(z.literal("")),
  service: z.enum(["", "tiling", "terrazzo", "partition", "renovation", "remodel", "painting"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message is too long").trim(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_FROM;
const businessWhatsAppNumber = process.env.WHATSAPP_BUSINESS_NUMBER;

const twilioClient = accountSid && authToken ? twilio(accountSid, authToken) : null;

async function sendWhatsAppMessage(validatedData: ContactFormInput) {
  if (!twilioClient || !twilioWhatsAppNumber || !businessWhatsAppNumber) {
    console.warn("Twilio WhatsApp not configured. Skipping message.");
    return false;
  }

  try {
    const serviceLabel = validatedData.service || "Not specified";
    const messageBody = `
New Contact Request

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}
Service: ${serviceLabel}

Message:
${validatedData.message}
    `.trim();

    await twilioClient.messages.create({
      from: twilioWhatsAppNumber,
      to: businessWhatsAppNumber,
      body: messageBody,
    });

    console.log("WhatsApp message sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return false;
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      service: formData.get("service") || "",
      message: formData.get("message"),
    };

    const validatedData = contactFormSchema.parse(data);
    await sendWhatsAppMessage(validatedData);

    return {
      success: true,
      message: "Thank you for reaching out. We will respond with next steps within 24 hours.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Please check your input and try again.",
      };
    }

    console.error("Contact form error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}
