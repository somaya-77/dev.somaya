import CustomForm, { FormFieldEnum } from '@/components/CustomForm'
import { Patient } from '@/types/appwrite.types'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

const ConsentForm = ({ form }: { form: UseFormReturn<Patient> }) => {
  return (
    <>
        <CustomForm
            fieldType={FormFieldEnum.CHECKBOX}
            control={form.control}
            name="treatmentConsent"
            label="I consent to receive treatment for my health condition."
        />

        <CustomForm
            fieldType={FormFieldEnum.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I consent to the use and disclosure of my health information for treatment purposes."
        />

        <CustomForm
            fieldType={FormFieldEnum.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="I acknowledge that I have reviewed and agree to the privacy policy."
        />

    </>
)
}

export default ConsentForm
