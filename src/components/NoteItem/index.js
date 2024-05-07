import {NoteItemCard, NoteItemTitle, NoteItemDesp} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {title, notes} = eachNote
  return (
    <NoteItemCard>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemDesp>{notes}</NoteItemDesp>
    </NoteItemCard>
  )
}

export default NoteItem
