export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'PXL design system/Heading',
  // this is an example of how to add actions to the story
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'] // you can add custom events to this array to trigger actions
    }
  },
  argTypes: {
    level: {
      type: { name: 'string', required: false },
      description: 'Heading',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
      },
      options: ["h1", "h2", "h3", "h4", "h5"]
    },
  },
  args: {
    level: "h2",
    text: "Heading element text"
  }
};

const Template = (args) => `<pxl-heading level="${args.level}">${args.text}</pxl-heading>`;

export const Heading = Template.bind({});