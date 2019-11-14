
const TYPE = 'amp-dc-text';

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
          if (el.tagName === TYPE.toUpperCase()) {
            const result = { type: TYPE };
            return result;
          }
        },
    }
  });

  editor.BlockManager.add(TYPE, {
    label: 'Text',
    category: 'Amplience',
    content: {
      type: TYPE,
      content: `<div>«${TYPE}»</div>`,
      style: {
        display: 'block',
        padding: '5vh',
        'font-size': '48px',
      }
    },
  });
};