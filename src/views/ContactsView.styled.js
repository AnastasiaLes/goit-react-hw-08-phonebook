import styled from '@emotion/styled';

export const ContactsContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 70%;
  /* margin: 20px; */
  column-width: 48%;
  column-count: 2;
  column-gap: 4%;
  align-items: start;
  justify-items: center;
  flex-basis: 300px;
  flex-shrink: 0;
`;

export const ContactsTitle = styled.h2`
  /* text-align: center; */
`;

export const ContactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-basis: 100%; */
  flex: 1;
  height: 48%;
  padding: 20px;
  /* column-count: 2;
column-gap: 20px; */
  /* margin: 16px 25px; */
  background: #87ceeb;
  height: 100%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;

  /* + .ContactsColumn {
    margin-left: 4%;
} */
`;
