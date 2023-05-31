import UiLoader from "./UiLoader";

export default {
    title: 'Ui-kit/UiLoader',
    component: UiLoader
}

const Template = (args) => <UiLoader {...args} />

const props = {
    theme: 'white',
    isShadow: true,
    classes:'',
    // text:'hello',
    // onClick:() => console.log('click'),
    // disabled:false,
    // theme:'dark',
}

export const Black = Template.bind({})

Black.args = {
    ...props,
    theme: 'black'
}

export const White = Template.bind({})

White.args = {
    ...props,
    theme: 'white',
    isShadow:true
}

export const Blue = Template.bind({})

Blue.args = {
    ...props,
    theme:'blue'
}