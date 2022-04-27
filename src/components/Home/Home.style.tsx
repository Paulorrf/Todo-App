import styled from "styled-components";
import { Link } from "react-router-dom";
import BgMobileDark from "../../images/bg-mobile-dark.jpg";
import BgDesktopDark from "../../images/bg-desktop-dark.jpg";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark.bgDarkMain};
`;

export const BgImg = styled.div`
  min-height: 200px;
  width: 100%;
  background-image: url(${BgMobileDark});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${(props) => props.theme.colors.dark.textSec};

  @media (min-width: 620px) {
    background-image: url(${BgDesktopDark});
  }
`;

export const BgImgItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

  h2 {
    font-weight: bold;
    letter-spacing: 10px;
  }

  img {
    cursor: pointer;
  }
`;

export const TodosContainer = styled.div`
  width: 80%;
  margin: -4rem auto 0 auto;
`;

export const UserDiv = styled.div`
  color: ${(props) => props.theme.colors.dark.textSec};
  width: 100%;
  padding: 0 2rem;
  margin: 1rem auto;
  display: flex;
  justify-content: end;
`;

export const UserEmail = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-right: 1rem;
    font-weight: bold;
  }

  button {
    padding: 0.3rem 1.4rem;
    cursor: pointer;
    border-radius: 10px;
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.dark.bgTodo};
    color: ${(props) => props.theme.colors.dark.textSec};
  }
`;

export const UserLogin = styled.div`
  a {
    margin: 0 0.4rem;

    :hover {
      color: red;
    }
  }
`;

export const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.dark.textSec};
  text-decoration: none;
`;
