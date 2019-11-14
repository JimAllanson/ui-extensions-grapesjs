import { SdkManager } from '~dc-sdk';
const TYPE = 'image-url';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
    }, ...opts
  };

  editor.DomComponents.addType(TYPE, {
    model: {
      defaults: {
        tagName: TYPE,
        contentId: '',
        traits: [
          {
            type: 'text',
            name: 'image-url',
            label: 'URL for selected image'
          },
          {
            type: 'button',
            text: 'Select Image...',
            full: true,
            command: async editor => {
              const item = await SdkManager.getImage();
              const component = editor.getSelected();
              console.log(item);
              const dynamicUrl = `https://${item.defaultHost}/i/${item.endpoint}/${item.name}`;
              component.getTrait('image-url').setTargetValue(dynamicUrl);
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
    label: 'Image URL',
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