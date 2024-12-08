import CustomForm, { FormFieldEnum } from '@/components/CustomForm'
import { FormControl } from '@/components/ui/form'
import { Patient } from '@/types/appwrite.types'
import { UseFormReturn } from 'react-hook-form'

const PersonalForm = ({ form }: {form: UseFormReturn<Patient>}) => {

    return (

        <div>
            <CustomForm
                fieldType={FormFieldEnum.INPUT}
                control={form.control}
                name="name"
                label="Full name"
                placeholder="John Doe"
                iconSrc="/assets/icons/user.svg"
                iconAlt="user"
            />

            <div className='flex flex-col gap-6 xl:flex-row'>
                <CustomForm
                    fieldType={FormFieldEnum.INPUT}
                    control={form.control}
                    name="email"
                    label="Email address"
                    placeholder="somayaAdel@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomForm
                    fieldType={FormFieldEnum.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(555) 123-4567"
                />
            </div>


            <div className='flex flex-col gap-6 xl:flex-row'>
                <CustomForm
                    fieldType={FormFieldEnum.DATE_PICKER}
                    control={form.control}
                    name="birthDate"
                    label="Date of Birth"
                    placeholder="Select your birth date"
                    iconSrc="/assets/icons/calendar.svg"
                    iconAlt="birth date"
                />

                <CustomForm
                    fieldType={FormFieldEnum.SKELETON}
                    control={form.control}
                    name="gender"
                    label="Gender"
                    renderSkeleton={(field) => (
                        <FormControl>
                            {/* <Radio */}

                        </FormControl>
                    )}
                />

            </div>

        </div>
    )
}

export default PersonalForm
