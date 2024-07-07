import './EditButton.scss';
import IconEdit from '../../Icons/';

const EditButton = ({ isEditing, handleEditToggle, handleSave, editedWord, handleChange, handleCancel }) => {
  return (
    <div className="edit-button-container">
      {isEditing ? (
        <>
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEditToggle} className="edit-button">
         <IconEdit />
        </button>
      )}
    </div>
  );
};

export default EditButton
