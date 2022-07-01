import './MoreButton.css';

function MoreButton({onClick}) {
  return (
    <button className='more-button' onClick={onClick}>Ещё</button>
  );
}

export default MoreButton;
