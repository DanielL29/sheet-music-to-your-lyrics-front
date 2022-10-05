import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 25px;

  > img {
    width: 80px;
    border-radius: 100%;
    margin-bottom: 15px;
  }

  > div img {
    width: 40px;
    transition: all 300ms ease-in-out;
    margin-top: 10px;
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: column;
    position: fixed;
    margin-top: 100px;
  }

  .edit {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #15c7cf; 
    color: #fff; 
    width: 40px; 
    height: 40px; 
    border-radius: 100%; 
    padding: 6px;
    transition: all 300ms ease-in-out;
  }

  .edit:hover, > div img:hover {
    transform: scale(1.1);
  }
`;

const MusicBarWrapper = {
  Container,
};

export default MusicBarWrapper;