const Note = ({ note, toggleImportance }) => {

    const label = note.important
    ? 'Make not important' : 'Make important'

    return (
        <li>
            { note.content }<br/>
            <button className="important-btn" onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note