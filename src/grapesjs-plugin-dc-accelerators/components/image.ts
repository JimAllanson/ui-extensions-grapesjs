
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
<<<<<<< HEAD
    },
    isComponent: el => {
      return (el.tagName.toLowerCase() === TYPE);
    },
=======
      isComponent: el => {
          if (el.tagName === TYPE.toUpperCase()) {
            const result = { type: TYPE };
            return result;
          }
        },
    }
>>>>>>> b799790e36bb0f7cec24d8cdd8a68d28c70c9aa6
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