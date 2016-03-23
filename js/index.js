import 'svgxuse';
import './array-from';

import Fab from '../components/fab/fab';
import FileUploader from '../base-elements/inputs/file/file';
import Tab from '../components/tabs-nav/tabs-nav';
import OverflowMenu from '../components/overflow-menu/overflow-menu';
import Modal from '../components/modals/modals';
import HeaderNav from '../components/header/header';
import Toolbars from '../components/toolbars/toolbars';
import Spinner from '../components/spinner/spinner';

document.addEventListener('DOMContentLoaded', () => {
  Fab.init();
  FileUploader.init();
  Tab.init();
  OverflowMenu.init();
  Modal.init();
  HeaderNav.init();
  Toolbars.init();
  Spinner.init();
});

module.exports = {
  Fab,
  FileUploader,
  Tab,
  OverflowMenu,
  Modal,
  HeaderNav,
  Toolbars,
  Spinner,
};