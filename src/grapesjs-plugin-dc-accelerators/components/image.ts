
const TYPE = 'amp-dc-image';

export default (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };

  editor.DomComponents.addType(TYPE, {
    model: {
      defaults: {
        tagName: TYPE,
        contentId: '',
        traits: [
          {
            type: 'text',
            name: 'contentId',
            label: 'Amplience Dynamic Content ID'
          }
        ],
      },
      isComponent: el => {
        debugger;
          if (el.tagName === TYPE) {
            const result = { type: TYPE };
            return result;
          }
        },
    }
  });

  editor.BlockManager.add(TYPE, {
    label: 'Dynamic Image',
    category: 'Amplience',
    content: {
      type: TYPE,
      content: `<span>«${TYPE}»</span>`,
      style: {
        display: 'block',
        background: '#ccc',
        padding: '5vh',
        'font-size': '48px',
        'min-height': '40vh'
      }
    },
  });
};