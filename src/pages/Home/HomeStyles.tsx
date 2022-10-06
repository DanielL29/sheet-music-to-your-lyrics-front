import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  
  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 15px;
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 180px;
    height: 180px;
    border-radius: 5px;
    background-color: #666;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 3px 3px 8px 0px rgba(150,150,150,0.75);
  }

  .card:hover {
    transform: scale(1.1);
  }

  h1 {
    font-weight: 600;
    color: #15c7cf;
    font-size: 23px;
    margin-top: 100px;
  }

  h2 {
    font-weight: 400;
    font-size: 18px;
    margin: 15px 0;
  }
`;

const HomeWrapper = {
  Container,
};

export default HomeWrapper;
