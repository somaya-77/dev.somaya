import CustomForm, { FormFieldEnum } from '@/components/CustomForm'
import { FormControl } from '@/components/ui/form'
import { SelectItem } from '@/components/ui/select'
import Uploader from '@/components/Uploader'
import { IdentificationTypes } from '@/constants'
import { Patient } from '@/types/appwrite.types'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

const IdentificationForm = ({ form }: { form: UseFormReturn<Patient> }) => {
    return (
        <>
            <CustomForm
                fieldType={FormFieldEnum.SELECT}
                control={form.control}
                name="identificationType"
                label="Identification type"
                placeholder="Identification type"
            >
                {IdentificationTypes.map(type => (
                    <SelectItem value={type} key={type}>
                        {type}
                    </SelectItem>
                ))}
            </CustomForm>

            <CustomForm
                fieldType={FormFieldEnum.INPUT}
                control={form.control}
                name="identificationNumber"
                label="Identification Number"
                placeholder="ex: 12345896"
            />

            <CustomForm
                fieldType={FormFieldEnum.SKELETON}
                control={form.control}
                name="identificationDocument"
                label="Scanned Copy of Identification Document"
                renderSkeleton={(filed) => (
                    <FormControl>
                        <Uploader files={filed.value} onChange={filed.onChange}/>
                    </FormControl>
                )}
            />
        </>
    )
}

export default IdentificationForm;
