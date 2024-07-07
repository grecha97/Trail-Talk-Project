import './DeleteButton.scss';

const DeleteButton = ({ onDelete }) => {
    const handleClick = (e) => {
      const button = e.currentTarget;
      if (!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => {
          button.classList.remove('delete');
          onDelete();
        }, 3200);
      }
      e.preventDefault();
    };
  
    return (
      <button className="button" onClick={handleClick}>
        <div className="trash">
          <div className="top">
            <div className="paper"></div>
          </div>
          <div className="box"></div>
          <div className="check">
            <svg viewBox="0 0 8 6">
              <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
            </svg>
          </div>
        </div>
      </button>
    );
  };
  
  export default DeleteButton;