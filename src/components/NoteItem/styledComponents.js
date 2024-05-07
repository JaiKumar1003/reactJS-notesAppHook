import styled from 'styled-components'

export const NoteItemCard = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 20px;
  border: 1px solid #d8d8d8;
  border-radius: 14px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 31%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
  }
`

export const NoteItemTitle = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NoteItemDesp = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
