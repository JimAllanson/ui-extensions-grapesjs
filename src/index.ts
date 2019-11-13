import { init } from 'dc-extensions-sdk';
import * as grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';

interface ContentModel {
  html: string;
  css: string;
}

(async () => {
  try {
    const sdk = await init<ContentModel>();
    const value = await sdk.field.getValue();
    console.log(grapesjsPresetWebpage);

    var editor = grapesjs.init({
      components: value.html,
      style: value.css,

      height: '100%',
      showOffsets: 1,
      noticeOnUnload: 0,
      storageManager: { autoload: 0 },
      container: '#gjs',
      fromElement: false,
      plugins: [grapesjsPresetWebpage],
      pluginOpts: {
        'gjs-preset-webpage': {
          // options
        }
      }
    });

    
    /*const field: HTMLInputElement = $('#field');
    if(value !== undefined) {
      field.value = value;
    }
    const setContent = async value => {
      try {
        await sdk.field.setValue(value);
      } catch (e) {}
    };
    field.on('keyup', _ => setContent(field.value));*/
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
    //const error:HTMLHeadingElement = $('#error');
    //error.classList.add('show');
  }
})();
