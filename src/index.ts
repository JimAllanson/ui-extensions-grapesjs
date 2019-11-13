import { init } from 'dc-extensions-sdk';
import * as grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';

(async () => {
  try {
    var sdk = await init<string>();
    console.log(grapesjsPresetWebpage);

    var editor = grapesjs.init({
      height: '100%',
      showOffsets: 1,
      noticeOnUnload: 0,
      storageManager: { autoload: 0 },
      container: '#gjs',
      fromElement: true,
      plugins: [grapesjsPresetWebpage],
      pluginOpts: {
        'gjs-preset-webpage': {
          // options
        }
      }
    });

    var value = await sdk.field.getValue();
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
  } catch (e) {
    console.log(e);
    //const error:HTMLHeadingElement = $('#error');
    //error.classList.add('show');
  }
})();
