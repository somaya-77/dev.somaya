"use client";

import React from 'react'
import PersonalForm from './_comp/PersonalForm'
import MedicalForm from './_comp/MedicalForm'
import { z } from 'zod';
import { patientSchema } from '@/hook/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { PatientValues } from '@/hook/values';
import { Form } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
const RegisterForm = () => {



  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: PatientValues,
  });

  const onSubmit = async (values: z.infer<typeof patientSchema>) => {

  };



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-12">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <div className='space-y-6'>
          <h1 className="sub-header mb-9">Personal Information</h1>
        </div>
        <PersonalForm form={form} />

        <div className='space-y-6'>
          <h1 className="sub-header mb-9">Medical Information</h1>
        </div>
        {/* <MedicalForm  form={form}/> */}

        <div className='space-y-6'>
          <h1 className="sub-header mb-9">Personal Information</h1>
        </div>


        <div className='space-y-6'>
          <h1 className="sub-header mb-9">Personal Information</h1>
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm
