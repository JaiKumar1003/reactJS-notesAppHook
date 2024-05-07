import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const NotesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 22px;
  margin-bottom: 26px;
  @media screen and (min-width: 768px) {
    font-size: 42px;
    margin-bottom: 56px;
  }
`

export const NotesFormCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 26px;
  box-shadow: 1px 1px 10px 6px rgba(0, 0, 0, 0.1);
`

export const NotesTitleInput = styled.input`
  background-color: transparent;
  border: none;
  height: 40px;
  width: 100%;
  padding: 10px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const NotesTextInput = styled.textarea`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 10px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const AddBtn = styled.button`
  background-color: #4c63b6;
  border: none;
  border-radius: 4px;
  align-self: flex-end;
  height: 40px;
  width: 80px;
  padding: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 90px;
    font-size: 18px;
  }
`

export const NoNotesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    min-height: 80vh;
  }
`

export const NoNotesImg = styled.img`
  height: 68px;
  width: 68px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 120px;
    width: 120px;
  }
`

export const NoNotesHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NoNotesDesp = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const NotesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
  margin-top: 30px;
`
