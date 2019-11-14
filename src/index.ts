import { init } from 'dc-extensions-sdk';
import * as grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import dcAcceleratorPlugin from './grapesjs-plugin-dc-accelerators'

interface ContentModel {
  html: string;
  css: string;
}

(async () => {
  try {
    const sdk = await init<ContentModel>();
    
    console.log(grapesjsPresetWebpage);

    var editor = grapesjs.init({
      height: '100%',
      showOffsets: 1,
      noticeOnUnload: 0,
      storageManager: { autoload: 0 },
      container: '#gjs',
      fromElement: false,
      plugins: [dcAcceleratorPlugin, grapesjsPresetWebpage],
      pluginOpts: {
        'gjs-preset-webpage': {
          // options
        }
      }
    });

    const value = await sdk.field.getValue();
    editor.setComponents(value.html);
    editor.setStyle(value.css);
    
    const setContent = async value => {
      try {
        await sdk.field.setValue(value);
      } catch (e) { }
    };

    editor.on('update', obj => {
      setContent({
        html: editor.getHtml(),
        css: editor.getCss()
      });
    });
  } catch (e) {
    console.log(e);
  }
})();
