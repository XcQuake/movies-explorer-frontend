import { useEffect, useCallback } from 'react';
import './Popup.css';

function Popup({isActive, setState, message}) {
  const handleClose = useCallback(() => {
    setState({
      isActive: false,
      message: '',
    })
  }, [setState]);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        handleClose();
      }, 3000)
    }}, [isActive, handleClose]
  );

  return (
    <div className={!isActive ? 'popup' : 'popup popup_active'}>
      <button className='popup__close-button' onClick={handleClose} />
      <div className='popup__wrapper'>
      <p className='popup__message'>{message}</p>
      </div>
    </div>
  );
}

export default Popup;
