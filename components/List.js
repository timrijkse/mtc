import styled from "@emotion/styled";
import Checkmark from "./Checkmark";

const List = styled.ul`
  list-style: none;
  margin: 64px 0 0;
  padding: 0;
  columns: 3;
  column-gap: 16px;
  font-family: "Source Sans Pro", sans-serif;
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 0 16px;
  }

  @media (max-width: 768px) {
    columns: 2;
  }

  @media (max-width: 512px) {
    columns: 1;
    margin-top: 32px;

    li {
      /* justify-content: left; */
    }
  }
`;

export default () => {
  return (
    <List>
      <li>
        <Checkmark /> Live map met beschikbare tafels
      </li>
      <li>
        <Checkmark /> Zowel binnen als buiten
      </li>
      <li>
        <Checkmark /> Meer tijd voor meer gasten
      </li>
      <li>
        <Checkmark /> Digitaal 24/7 reserveren
      </li>
      <li>
        <Checkmark /> Crowd Control
      </li>
      <li>
        <Checkmark /> Marketing Tool
      </li>
    </List>
  );
};
