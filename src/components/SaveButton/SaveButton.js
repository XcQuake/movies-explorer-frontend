import './SaveButton.css';
import { useState } from 'react';

function SaveButton() {
  const [isSaved, setIsSaved] = useState(false);

  function saveHandler() {
    setIsSaved(!isSaved);
  };

  return (
    <button
      className={`${isSaved && 'save-button_active'} save-button`}
      type='button'
      onClick={saveHandler}
    >
      <span className='save-button__text'>Сохранить</span>
    </button>
  );
}

export default SaveButton;