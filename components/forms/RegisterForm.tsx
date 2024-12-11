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
const RegisterForm = () => {


  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: PatientValues,
  });

  const onSubmit = async (values: z.infer<typeof patientSchema>) => {

  };



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
        <MedicalForm  form={form}/>
        </div>

        <div className='space-y-6'>
          <h1 className="sub-header mb-9">Identification and Verfication</h1>
          <IdentificationForm form={form}/>
        </div>


        <div className='space-y-6'>
          <h1 className="sub-header mb-9">Consent and Privacy</h1>
          <ConsentForm form={form}/>
        </div>

        <SubmitButton isLoading={isLoading}>Submit and continue</SubmitButton>
      </form>
    </Form>
  )
}

export default RegisterForm
