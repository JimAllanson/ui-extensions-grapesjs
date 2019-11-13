import { init } from 'dc-extensions-sdk';
import { $ } from './bling';

(async () => {
  try {
    var sdk = await init<string>();
    var value = await sdk.field.getValue();
    const field: HTMLInputElement = $('#field');
    if(value !== undefined) {
      field.value = value;
    }
    const setContent = async value => {
      try {
        await sdk.field.setValue(value);
      } catch (e) {}
    };
    field.on('keyup', _ => setContent(field.value));
  } catch (e) {
    const error:HTMLHeadingElement = $('#error');
    error.classList.add('show');
  }
})();
