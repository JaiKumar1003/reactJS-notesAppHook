import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesContainer,
  NotesCard,
  NotesHeading,
  NotesFormCard,
  NotesTitleInput,
  NotesTextInput,
  AddBtn,
  NoNotesCard,
  NoNotesImg,
  NoNotesHeading,
  NoNotesDesp,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNotes = event => {
    setNotes(event.target.value)
  }
  const onSubmitForm = event => {
    event.preventDefault()
    if (title !== '' && notes !== '') {
      setNotesList(prevState => [...prevState, {id: uuidv4(), title, notes}])
      setTitle(prevState => '')
      setNotes(prevState => '')
    }
  }
  const renderNoNotes = () => (
    <NoNotesCard>
      <NoNotesImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading>No Notes Yet</NoNotesHeading>
      <NoNotesDesp>Notes you add will appear here</NoNotesDesp>
    </NoNotesCard>
  )
  console.log(notesList)
  return (
    <NotesContainer>
      <NotesCard>
        <NotesHeading>Notes</NotesHeading>
        <NotesFormCard onSubmit={onSubmitForm}>
          <NotesTitleInput
            value={title}
            onChange={onChangeTitle}
            type="text"
            placeholder="Title"
          />
          <NotesTextInput
            value={notes}
            onChange={onChangeNotes}
            placeholder="Take a Note..."
            rows="4"
          ></NotesTextInput>
          <AddBtn type="submit">Add</AddBtn>
        </NotesFormCard>
        {notesList.length < 1 ? (
          renderNoNotes()
        ) : (
          <NotesList>
            {notesList.map(eachItem => (
              <NoteItem key={eachItem.id} eachNote={eachItem} />
            ))}
          </NotesList>
        )}
      </NotesCard>
    </NotesContainer>
  )
}

export default Notes
