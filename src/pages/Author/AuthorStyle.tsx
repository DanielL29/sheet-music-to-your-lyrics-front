import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;

  h1 {
    font-weight: 600;
    color: #15c7cf;
    font-size: 21px;
    margin-bottom: 15px;
    text-decoration: underline;
  }

  .author {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-left: 15px;
    color: #444;
  }

  h3 {
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 15px;
    margin: 15px 0;
    cursor: pointer;
  }

  h3:hover {
    text-decoration: underline;
  }
`;

const AuthorWrapper = {
  Container,
};

export default AuthorWrapper;
