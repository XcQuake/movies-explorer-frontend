import './SaveButton.css';
import { useState } from 'react';

function SaveButton() {
  const [isSaved, setIsSaved] = useState(false);

  function saveHandler() {
    setIsSaved(!isSaved);
  };

  const buttonTextStyle = {
    transition: 'opacity 0.3s ease',
    opacity: isSaved ? '0' : '1',
  }

  return (
    <button
      className={`${isSaved && 'save-button_active'} save-button`}
      type='button'
      onClick={saveHandler}
    >
      <span className='save-button__text' style={buttonTextStyle}>Сохранить</span>
    </button>
  );
}

export default SaveButton;