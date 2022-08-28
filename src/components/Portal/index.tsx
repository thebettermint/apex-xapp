import { createPortal } from 'react-dom';

const Portal = (props: any): any =>
  createPortal(props, document.querySelector('#__portal')! as HTMLElement);

export default Portal;
