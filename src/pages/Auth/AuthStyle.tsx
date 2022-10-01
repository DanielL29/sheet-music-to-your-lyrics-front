import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  padding: 0 100px;
  box-sizing: border-box;

  > img {
    width: 40%;
    transition: all 400ms ease-in-out;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -150px;
    width: 100%;
  }

  > div > h1 {
    font-size: 20px;
    font-weight: 600;
    color: #15C7CF;
    text-decoration: underline;
  }

  > img {
    margin-top: -300px;
  }
`;

const AuthWrapper = {
  Container,
  Form,
};

export default AuthWrapper;
