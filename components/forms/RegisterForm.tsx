"use client";

import React, { useState } from 'react'
import PersonalForm from './_comp/PersonalForm'
import MedicalForm from './_comp/MedicalForm'
import { z } from 'zod';
import { patientSchema } from '@/hook/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { PatientValues } from '@/hook/values';
import { Form } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import ConsentForm from './_comp/ConsentForm';
import IdentificationForm from './_comp/IdentificationForm';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { registerPatient } from '@/lib/actions/patient.actions';
import { Patient } from '@/types/appwrite.types';


const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: PatientValues,
  });

  const onSubmit = async (values: z.infer<typeof patientSchema>) => {
    setIsLoading(true);

    // Store file info in form data as

    // let formData;
    // if (
    //   values.identificationDocument &&
    //   [...values.identificationDocument.entries()].length > 0
    // ) {
    //   const blobFile = new Blob([values.identificationDocument[0]], {
    //     type: values.identificationDocument[0].type,
    //   });

    //   formData = new FormData();
    //   formData.append("blobFile", blobFile);
    //   formData.append("fileName", values.identificationDocument[0].name);
    // }

    let formData;
    if (
      values.identificationDocument &&
      [...values.identificationDocument.entries()].length > 0
    ) {
      const firstEntry = values.identificationDocument.entries().next().value;
      if (firstEntry) {
        const [name, file] = firstEntry;
        if (file instanceof File) {
          const blobFile = new Blob([file], {
            type: file.type,
          });

          formData = new FormData();
          formData.append("blobFile", blobFile);
          formData.append("fileName", file.name);
        } else {
          console.error("Invalid file type: Expected File but got", typeof file);
        }
      }
    }



    try {
      const patient: Patient = {
        userId: user.$id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        address: values.address,
        occupation: values.occupation,
        emergencyContactName: values.emergencyContactName,
        emergencyContactNumber: values.emergencyContactNumber,
        primaryPhysician: values.primaryPhysician,
        insuranceProvider: values.insuranceProvider,
        insurancePolicyNumber: values.insurancePolicyNumber,
        allergies: values.allergies,
        currentMedication: values.currentMedication,
        familyMedicalHistory: values.familyMedicalHistory,
        pastMedicalHistory: values.pastMedicalHistory,
        identificationType: values.identificationType,
        identificationNumber: values.identificationNumber,
        identificationDocument: values.identificationDocument
          ? formData
          : undefined,
        treatmentConsent: values.treatmentConsent,
        disclosureConsent: values.disclosureConsent,
        privacyConsent: values.privacyConsent,
      };

      const newPatient = await registerPatient(patient);

      if (newPatient) {
        router.push(`/patients/${user.$id}/new-appointment`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };


  console.log("error", form.formState.errors);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-8">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <div className='space-y-6'>
          <h1 className="sub-header mb-6">Personal Information</h1>
          <PersonalForm form={form} />
        </div>

        <div className='space-y-6'>
          <h1 className="sub-header mb-6">Medical Information</h1>
          <MedicalForm form={form} />
        </div>

        <div className='space-y-6'>
          <h1 className="sub-header mb-6">Identification and Verfication</h1>
          <IdentificationForm form={form} />
        </div>


        <div className='space-y-6'>
          <h1 className="sub-header mb-6">Consent and Privacy</h1>
          <ConsentForm form={form} />
        </div>

        <SubmitButton isLoading={isLoading}>Submit and continue</SubmitButton>
      </form>
    </Form>
  )
}

export default RegisterForm
