export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'PXL design system/Card',
    // this is an example of how to add actions to the story
    parameters: {
      actions: {
        argTypesRegex: '^on.*',
        handles: ['click'] // you can add custom events to this array to trigger actions
      }
    },
    argTypes: {
        // heading: {
        //     type: { name: 'string', required: false },
        //     description: 'Heading',
        //     table: {
        //       type: { summary: 'string' },
        //     },
        //     control: {
        //       type: 'text',
        //     },
        //   },
    },
    args: {
        heading: "Content heading here",
        main: "<p>This is most likely a paragraph and should support HTML elements</p>",
        disclosure: "This is a disclosure"
    }
};

const Template = (args) => `<pxl-card heading="${args.heading}" main="${args.main}" disclosure="${args.disclosure}"></pxl-card>`;

export const Card = Template.bind({});
Card.args = {
//   heading: 'This is a heading'
};