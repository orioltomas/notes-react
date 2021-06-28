const NoteForm = ({submitFunction, noteValue, noteChangeFunction}) => {

    return (
        <form onSubmit={submitFunction}>
            <input placeholder="New note ..." value={noteValue} onChange={noteChangeFunction}></input>
            <button className="submit-btn" type="submit">
                <span></span>
                <span></span>
            </button>
      </form>
    )
}

export default NoteForm