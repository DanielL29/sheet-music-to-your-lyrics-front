import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;
  width: 1200px;

  .music {
    display: flex;
    box-sizing: border-box;
    margin-top: 20px;
  }

  .lyric-area, .snippets-area {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .lyric-area h1, .snippets-area h2 {
    font-weight: 600;
    font-size: 25px;
    color: #15c7cf;
    margin-bottom: 5px;
  }

  .lyric-area h2, .snippets-area h3 {
    font-weight: 500;
    font-size: 20px;
    color: #b5b5b5;
    cursor: pointer;
    margin-bottom: 15px;
  }

  .lyric-area h3, .snippets-area h4 {
    font-weight: 600;
    font-size: 20px;
    text-decoration: underline;
    color: #15c7cf;
    margin-bottom: 20px;
  }

  .snippets-area h4 {
    margin-top: 55px;
  }

  .snippets-area h5 {
    margin-top: -50px;
  }
  
  .lyric-area p, .snippets-area h5 {
    white-space: pre-wrap;
    line-height: 25px;
    font-size: 16px;
    max-width: 500px;
    word-wrap: break-word;
    color: #666;
  }

  .snippet {
    background-color: #d5d5d5;
    cursor: pointer;
    border-radius: 3px;
    padding-left: 10px;
    margin-top: 20px;
  }

  .snippets-area > div {
    position: fixed;
    width: 550px;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
  }

  iframe {
    margin-bottom: 20px;
  }
`;

const UpdateLyric = styled.textarea`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  width: 500px;
  height: 500px;
  line-height: 20px;
  resize: none;
  outline: none;
`;

const Snippet = styled.div`
  background-color: #666;
  padding: 30px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #b5b5b5;
  margin-bottom: 20px;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 10px;
    color: #fff;
  }

  span {
    color: #d5d5d5;
  }

  p {
    white-space: pre-wrap;
    padding: 20px;
    background-color: #333;
    margin: 15px 0;
    border-radius: 5px;
    line-height: 20px;
    color: #e5e5e5;
    word-wrap: break-word;
    max-height: 170px;
    overflow-y: scroll;
  }

  p::-webkit-scrollbar {
    display: none;
  }

  & label.Mui-focused {
    color: #d5d5d5;
  }

  & .MuiInput-underline::after {
    border-bottom-color: #d5d5d5;
  }

  & .MuiFilledInput-underline::after {
    border-bottom-color: #d5d5d5;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #d5d5d5;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    color: #d5d5d5;
  }

  > div > div {
    margin-bottom: 10px;
  }
`;

const MusicWrapper = {
  Container,
  UpdateLyric,
  Snippet,
};

export default MusicWrapper;
