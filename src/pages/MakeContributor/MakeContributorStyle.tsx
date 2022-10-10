import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  h1 {
    font-weight: 500;
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

const MakeContributorWrapper = {
  Container,
};

export default MakeContributorWrapper;
