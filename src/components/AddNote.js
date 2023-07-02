import { useState } from 'react';

const AddNote = ({ addNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 120;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			addNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='5'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<span className='save-btn' onClick={handleSaveClick} title="Add">
					<i className="fa-solid fa-check"></i>
				</span>
			</div>
		</div>
	);
};

export default AddNote;
