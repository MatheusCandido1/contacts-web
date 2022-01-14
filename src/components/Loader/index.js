import ReactDOM from 'react-dom';

import { Overlay } from './style';

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
