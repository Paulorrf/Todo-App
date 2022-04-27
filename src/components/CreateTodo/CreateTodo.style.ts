import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 2rem;
  background-color: ${(props) => props.theme.colors.dark.bgTodo};
  padding: 0.2rem 1rem;
  margin: 0 auto;
  border-radius: 6px;
  display: flex;
`;

export const Img = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

type InputTextProps = {
  noText?: boolean;
};

export const InputText = styled.input<InputTextProps>`
  background-color: transparent;
  border-color: transparent;
  margin-left: 1rem;
  width: 100%;
  outline: none;
  color: ${(props) => props.theme.colors.dark.textMain};

  :focus {
    color: ${(props) =>
      props.noText ? "red" : props.theme.colors.dark.textSec};
  }
`;

//change the checkbox visual to a round checkbox
export const Round = styled.div`
  position: relative;

  label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    width: 20px;
    left: 0;
    position: absolute;
    top: 0;
  }

  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 3px;
    opacity: 0;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 10px;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;
