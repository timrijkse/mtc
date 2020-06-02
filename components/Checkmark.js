import styled from "@emotion/styled";

const Checkmark = styled.svg`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
`;

export default () => {
  return (
    <Checkmark viewBox="0 0 48 48">
      <polygon
        fill="#fff"
        points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
      />
    </Checkmark>
  );
};
