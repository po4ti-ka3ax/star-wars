import UiButton from "./UiButton";

export default {
    title: 'Ui-kit/UiButton',
    component: UiButton
}

const Template = (args) => <UiButton {...args} />

const props = {
    text:'hello',
    onClick:() => console.log('click'),
    disabled:false,
    theme:'dark',
}

export const Light = Template.bind({})

Light.args = {
    ...props,
    theme: 'light'
}

export const Dark = Template.bind({})

Dark.args = {
    ...props,
    theme: 'dark'
}

export const Disabled = Template.bind({})

Disabled.args = {
    ...props,
    disabled:true
}