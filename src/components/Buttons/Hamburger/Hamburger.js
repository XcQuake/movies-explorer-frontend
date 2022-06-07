import './Hamburger.css';

function Hamburger() {
  return (
    <button className='hamburger' type='button'>
      <span className='hamburger__line' />
      <span className='hamburger__line' />
      <span className='hamburger__line' />
    </button>
  );
}

export default Hamburger;
