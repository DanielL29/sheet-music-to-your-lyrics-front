import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;
  width: 1200px;

  .musics > div {
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 15px;
    margin: 15px 0;
  }

  h2 {
    font-size: 16px;
    color: #333;
    cursor: pointer;
    margin-bottom: 5px;
  }

  h2:hover {
    text-decoration: underline;
  }

  h3, h4 {
    color: #a5a5a5;
    margin-left: 10px;
  }
`;

const MusicsWrapper = {
  Container,
};

export default MusicsWrapper;
