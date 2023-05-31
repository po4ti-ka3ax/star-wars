import UiInput from "./UiInput";

export default {
    title: 'Ui-Kit/UiInput',
    component: UiInput
}

const Template = (arg) => {
    const [value, setValue] = useState('')

    const handleInputChange = value => {
        setValue(value)

    }

    return (
        <UiInput
            {...arg}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
}
const props = {
    handleInputChange: () => console.log('change'),
    value: '',
    placeholder: 'placeholder',
    classes: '',
}

export const Default = Template.bind({})

Default.arg = {
    ...props 
}