import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #93cbce;
  background-color: #fff;
  padding: 0 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 70px;
  }

  .logo-search, .nav {
    display: flex;
    align-items: center;
  }

  .logo-search {
    width: 500px;
  }

  .logo-search p {
    margin-right: 15px;
  }

  .nav p {
    margin-left: 15px;
  }
  
  .link {
    font-weight: 600;
    text-decoration: none;
  }

  @media screen and (max-width: 1200px) {
    > div, .logo-search {
      width: 100%;
    }
  }
`;

const LogoHeader = styled.div`
  width: 90px;
  overflow: hidden;
  transition: all 500ms ease-in-out;

  img {
    width: 300px;
    cursor: pointer;
  }

  :hover {
    width: 800px;
  }
`;

const HeaderWrapper = {
  Container,
  LogoHeader,
};

export default HeaderWrapper;
