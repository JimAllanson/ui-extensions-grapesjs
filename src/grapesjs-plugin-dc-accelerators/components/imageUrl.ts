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
        tagName: 'img',
        amplienceImageUrl: true,
        src: '',
        traits: [
          {
            type: 'text',
            name: 'src',
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
              component.getTrait('src').setTargetValue(dynamicUrl);
            }
          }
        ],
      },
    },
    isComponent: el => {
      debugger;
      return el.hasAttribute('amplienceImageUrl')
    },
  });

  editor.BlockManager.add(TYPE, {
    label: 'Image URL',
    category: 'Amplience',
    content: {
      type: TYPE,
      attributes: {
        amplienceImageUrl: true
      }
    }
  });


};