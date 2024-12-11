import CustomForm, { FormFieldEnum } from '@/components/CustomForm'
import { FormControl } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GenderOptions } from '@/constants'
import { Patient } from '@/types/appwrite.types'
import { UseFormReturn } from 'react-hook-form'

const PersonalForm = ({ form }: { form: UseFormReturn<Patient> }) => {
    return (
        <>
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
                            <RadioGroup
                                className="flex h-11 gap-6 xl:justify-between"
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                {GenderOptions.map((option) => (
                                    <div key={option} className="radio-group">
                                        <RadioGroupItem value={option} id={option} />
                                        <Label htmlFor={option} className="cursor-pointer">
                                            {option}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    )}
                />

            </div>

            <div className='flex flex-col gap-6 xl:flex-row'>
                <CustomForm
                    fieldType={FormFieldEnum.INPUT}
                    control={form.control}
                    name="address"
                    label="Address"
                    placeholder="ex: 14 street, New York, NY - 5101"
                />

                <CustomForm
                    fieldType={FormFieldEnum.INPUT}
                    control={form.control}
                    name="occupation"
                    label="Occupation"
                    placeholder="Software Engineer"
                />
            </div>

            <div className='flex flex-col gap-6 xl:flex-row'>
                <CustomForm
                    fieldType={FormFieldEnum.INPUT}
                    control={form.control}
                    name="emergencyContactName"
                    label="Emergency contact name"
                    placeholder="Guardian’s name"
                />

                <CustomForm
                    fieldType={FormFieldEnum.PHONE_INPUT}
                    control={form.control}
                    name="emergencyContactNumber"
                    label="Emergency contact number"
                    placeholder="ex: +1 (868) 579-9831"
                />
            </div>
        </>
    )
}

export default PersonalForm
