export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'PXL design system/Link',
  // this is an example of how to add actions to the story
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'], // you can add custom events to this array to trigger actions,
    }
  },
  argTypes: {
    text: {
      description: 'Link text',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'icon',
      control: {
        type: 'select',
      },
      options: ["none", "chevron-right", "download", "external-link","square"],
      defaultValue: "none"
    },
    external: {
      description: 'open in new window',
      control: {
        type: 'boolean',
      },
      defaultValue: false
    },
    button: {
      control: {
        type: "select"
      },
      options: ["none","primary","secondary"],
      defaultValue: "none"
    }
  },
  args: {
    text: 'This is a link',
    href: "#"
  }
};


// TEMPLATE 
const Template = (args) => `<pxl-link text="${args.text}" href="${args.href}" icon="${args.icon}" external="${args.external}" button="${args.button}"></pxl-link>`;


// STORIES 
export const Link = Template.bind({});
Link.args = {};