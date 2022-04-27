import { FC, useState } from "react";

import Close from "../../images/icon-cross.svg";

import { TodoContainer, Line, TodoImg, TodoItems } from "./Todo.style";
import { Round } from "../CreateTodo/CreateTodo.style";

type Props = {
  last?: boolean;
  value: any;
  check: boolean;
  index: number;
  setDeleteTodo: Function;
  setCheckChanged: Function;
};

const Todo: FC<Props> = ({
  last,
  value,
  check = false,
  index,
  setDeleteTodo,
  setCheckChanged,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(check);

  const deleteTodo = () => {
    setDeleteTodo(index);
  };

  const checkChanged = () => {
    setCheckChanged(index);
    setIsChecked((prev: boolean) => !prev);
  };

  return (
    <>
      <TodoContainer>
        <TodoItems>
          <Round>
            <input
              type="checkbox"
              defaultChecked={isChecked}
              id={index.toString()}
              onChange={checkChanged}
            />
            <label htmlFor={index.toString()}></label>
          </Round>
          <p>{value}</p>
          <TodoImg src={Close} alt="delete" onClick={deleteTodo} />
        </TodoItems>
      </TodoContainer>
      {last ? null : <Line />}
    </>
  );
};

export default Todo;
