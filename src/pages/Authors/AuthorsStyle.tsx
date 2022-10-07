import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;
  width: 1200px;

  .author {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 15px;
    margin: 15px 0;
  }

  .author img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 15px;
  }

  h2 {
    cursor: pointer;
  }

  h2:hover {
    text-decoration: underline;
  }

  h3 {
    color: #a5a5a5;
  }
`;

const AuthorsWrapper = {
  Container,
};

export default AuthorsWrapper;
