import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 25px;

  > img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin-bottom: 15px;
    object-fit: cover;
  }

  .translate img {
    width: 40px;
    transition: all 300ms ease-in-out;
    margin-top: 10px;
    cursor: pointer;
  }

  .translate {
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

  .edit:hover, .translate img:hover {
    transform: scale(1.1);
  }

  .contributors {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 3px;
  }
`;

const MusicBarWrapper = {
  Container,
};

export default MusicBarWrapper;
