import styled from "styled-components";
import { Container, BgImg } from "../Home/Home.style";

export const RegisterContainer = styled(Container)``;

export const RegisterBgImg = styled(BgImg)``;

export const Form = styled.form`
  width: 50%;
  min-height: 300px;
  margin: -3rem auto;
  position: relative;

  background-color: ${(props) => props.theme.colors.dark.bgTodo};
  border-radius: 10px;
`;

export const FormDiv = styled.div`
  width: 60%;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -70%);

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    padding: 0.4rem;
    border-radius: 20px;
    border-color: transparent;
  }
`;

export const BtnSubmit = styled.input`
  cursor: pointer;

  :hover {
    background-color: darkorange;
    color: ${(props) => props.theme.colors.dark.textSec};
  }
`;
