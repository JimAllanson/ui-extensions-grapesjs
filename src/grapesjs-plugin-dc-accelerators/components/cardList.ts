import { init } from 'dc-extensions-sdk';
import { SdkManager } from '~dc-sdk';
const TYPE = 'amp-cardlist';

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
            name: 'content-id',
            label: 'Amplience Dynamic Content ID'
          },
          {
            type: 'button',
            text: 'Select Content...',
            full: true,
            command: async editor => {
              const item = await SdkManager.getContent(['https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/cardlist.json']);
              const component = editor.getSelected();
              component.getTrait('content-id').setTargetValue(item.id);
            }
          }
        ],
      },
    },
    isComponent: el => {
      return (el.tagName.toLowerCase() === TYPE);
    },
  });

  editor.BlockManager.add(TYPE, {
    label: 'Card List',
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
    }
  });
};