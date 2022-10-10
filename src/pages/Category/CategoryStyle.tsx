import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;

  h2 {
    font-size: 18px;
    color: #666;
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    color: #b5b5b5;
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 15px;
  }

  h2:hover {
    text-decoration: underline;
  }

  .authors > div::-webkit-scrollbar {
    height: 8px;
  }

  .authors > div::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    cursor: pointer;
  }

  .authors > div {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 10px;
  }

  .authors .card {
    display: flex;
    align-items: center;
    min-width: 250px;
    height: 100px;
    box-shadow: 2px 3px 8px 0px rgba(180,180,180,0.75);
    background-color: #fff;
    border-radius: 5px;
    padding-left: 10px;
    margin: 0 10px;
    cursor: pointer;
  }

  .authors img {
    height: 70px;
    width: 70px;
    border-radius: 5px;
    margin-right: 10px;
    user-select: none;
    object-fit: cover;
  }

  .musics > div {
    margin-bottom: 15px;
  }
`;

const CategoryWrapper = {
  Container,
};

export default CategoryWrapper;
