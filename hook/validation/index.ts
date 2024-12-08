import { z } from "zod";

export const FormValidation = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});



export const patientSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone is required"),
    birthDate: z.coerce.date().refine((date) => !isNaN(date.getTime()), {
        message: "Birth date is required",
    }),
    gender: z.enum(["Male", "Female", "Other", "Unknown"], {
        invalid_type_error: "Invalid gender",
    }),
    address: z.string().min(1, "Address is required"),
    occupation: z.string().min(1, "Occupation is required"),
    emergencyContactName: z.string().min(1, "Emergency contact name is required"),
    emergencyContactNumber: z.string().min(1, "Emergency contact number is required"),
    primaryPhysician: z.string().min(1, "Primary physician is required"),
    insuranceProvider: z.string().min(1, "Insurance provider is required"),
    insurancePolicyNumber: z.string().min(1, "Insurance policy number is required"),
    allergies: z.string().nullable(),
    currentMedication: z.string().nullable(),
    familyMedicalHistory: z.string().nullable(),
    pastMedicalHistory: z.string().nullable(),
    identificationType: z.string().nullable(),
    identificationNumber: z.string().nullable(),
    identificationDocument: z.instanceof(FormData).nullable(),
    privacyConsent: z.boolean().refine((val) => val === true, {
        message: "Privacy consent is required",
    }),
});
