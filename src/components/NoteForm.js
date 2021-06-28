const NoteForm = ({submitFunction, noteValue, noteChangeFunction}) => {

    return (
        <form onSubmit={submitFunction}>
            <input placeholder="New note ..." value={noteValue} onChange={noteChangeFunction}></input>
            <button type="submit">ADD NOTE</button>
      </form>
    )
}

export default NoteForm