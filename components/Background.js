import styled from "@emotion/styled";

const Bg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #b74790;
  background: linear-gradient(135deg, #b74790 0%, #eb5d7c 100%);

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }
`;

export default () => {
  return (
    <Bg>
      <img src="images/background.jpg" />
    </Bg>
  );
};
