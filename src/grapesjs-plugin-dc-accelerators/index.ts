
import banner from './components/banner';
import image from './components/image';
import text from './components/text';
import card from './components/card';
import cardList from './components/cardList';

export default (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };

  banner(editor, opts);
  image(editor, opts);
  text(editor, opts);
  card(editor, opts);
  cardList(editor, opts);
};