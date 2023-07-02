// import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, deleteNote }) => {

    const colors = ["#FE9B72", "#B693FD", "#E4EE91", "#FD5DA8", "#39E75F", "#B0DBF1", "#F6B3DC", "#F1B9AC", "#FAEBBD", "#F4D291", "#BBEDBE", "#C0C6ED", "#CAF1DE", "#E1F8DC", "#BFD1DF", "#FF9AA2", "#8BF18B", "#D0CFCF", "#EAB9B9", "#F9EBEB", "#EBADAD", "#F2C6C6", "#EEA6A6", "#FDE8E8", "#F5D0C4", "#FFECE5", "#F4E1D4", "#DFDCD9", "#FEE1A0", "#FEF1D3", "#EDECEA", "#FFF9E2", "#F3F3F1", "#FFEC88", "#FFEF99", "#FFFF72", "#FFFF2B", "#FFFF7E", "#FFFF00", "#F8FD8F", "#EAEDC9", "#E5FF8E", "#D1FF36", "#DCF39C", "#ADFF2F", "#CAFF70", "#B8FF72", "#9FFF41", "#A5FF4D", "#CCFF99", "#F2FFE5", "#88FF88", "#BBFFBB", "#DDFFDD", "#96FF97", "#96ECA7", "#CFE9D8", "#28FF85", "#B5FFD5", "#88FFC3", "#97FFD7", "#99FFDD", "#DCE8E8", "#A8DDDD", "#00CDCD", "#C0E0FD", "#BCBCDD", "#D8C4FF", "#CC99FF", "#EBBAF8", "#EED2D6"];

	const num = Math.floor(Math.random() * colors.length);
	// floor is used coz rand no between 0 and arr.length
	console.log(colors[num]);

	return (
		<div className='note' style={{ backgroundColor : colors[num], boxShadow : `1px 1px 15px 2px ${colors[num]}`}}>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<span
					onClick={() => deleteNote(id)}
					className='delete-icon'
					title="Delete"
				><i className="fa-solid fa-xmark"></i></span>
			</div>
		</div>
	);
};

export default Note;
