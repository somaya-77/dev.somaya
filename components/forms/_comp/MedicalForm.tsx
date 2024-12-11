import CustomForm, { FormFieldEnum } from '@/components/CustomForm'
import { SelectItem } from '@/components/ui/select'
import { Doctors } from '@/constants'
import { Patient } from '@/types/appwrite.types'
import Image from 'next/image'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

const MedicalForm = ({ form }: { form: UseFormReturn<Patient> }) => {
  return (

    <>
      <CustomForm
        fieldType={FormFieldEnum.SELECT}
        control={form.control}
        name="primaryPhysician"
        label="Primary care physician"
        placeholder="Select a physician"
      >
        {Doctors.map((doctor, i) => (
          <SelectItem key={i} value={doctor.name}>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image 
              src={doctor.image} 
              alt={doctor.name} 
              width={32}
              height={32}
              className='rounded-full border border-dark-500' />
              <span>{doctor.name}</span>
            </div>
          </SelectItem>
        ))}
      </CustomForm>

      <div className='flex flex-col gap-6 xl:flex-row'>
        <CustomForm
          fieldType={FormFieldEnum.INPUT}
          control={form.control}
          name="insuranceProvider"
          label="Insurance provider"
          placeholder="ex: BlueCross"
        />

        <CustomForm
          fieldType={FormFieldEnum.INPUT}
          control={form.control}
          name="insurancePolicyNumber"
          label="Insurance policy number"
          placeholder="ex: ABC1234567"
        />
      </div>


      <div className='flex flex-col gap-6 xl:flex-row'>
        <CustomForm
          fieldType={FormFieldEnum.TEXTAREA}
          control={form.control}
          name="allergies"
          label="Allergies (if any)"
          placeholder="ex: Peanuts, Penicillin, Pollen"
        />

        <CustomForm
          fieldType={FormFieldEnum.TEXTAREA}
          control={form.control}
          name="currentMedication"
          label="Current medications"
          placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
        />
      </div>

      <div className='flex flex-col gap-6 xl:flex-row'>
        <CustomForm
          fieldType={FormFieldEnum.TEXTAREA}
          control={form.control}
          name="familyMedicalHistory"
          label="Family medical history (if relevant)"
          placeholder="ex: "
        />

        <CustomForm
          fieldType={FormFieldEnum.TEXTAREA}
          control={form.control}
          name="pastMedicalHistory"
          label="Past medical history"
          placeholder="ex: Asthma diagnosis in childhood"
        />
      </div>
    </>
  )
}

export default MedicalForm
