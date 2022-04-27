import styled from "styled-components";
import { Img } from "../CreateTodo/CreateTodo.style";

export const TodoContainer = styled.div`
  width: 100%;
  min-height: 2rem;
  background-color: ${(props) => props.theme.colors.dark.bgTodo};
  padding: 0.2rem 0rem;
  margin: 0 auto;
  border-radius: 6px;
  display: flex;

  p {
    width: 100%;
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.dark.textSec};
  }
`;

export const TodoItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

export const Line = styled.div`
  width: 100%;
  min-height: 1px;
  background-color: ${(props) => props.theme.colors.dark.textSec};
`;

export const TodoImg = styled(Img)`
  align-content: flex-end;
`;
