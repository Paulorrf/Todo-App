import { FC, useState, useEffect } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import db from "../../firebase";

import { TodosContainer } from "./Todos.style";

import { Todo, Spinner } from "../index";

interface UserId {
  userID: string;
}

const Todos: FC<UserId> = ({ userID }) => {
  const [todos, setTodos] = useState<any>();
  const [deleteTodo, setDeleteTodo] = useState<number | null>(null);
  const [checkChanged, setCheckChanged] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //get all todos
  useEffect(() => {
    //listener | get todos
    if (userID !== "" && userID !== undefined) {
      var unsub = onSnapshot(doc(db, "todos", userID), (doc) => {
        setTodos(doc.data());
        setIsLoading(false);
      });
    } else {
      return;
    }

    //cleaner
    return unsub;
  }, [userID]);

  //delete one todo from the array
  useEffect(() => {
    if (deleteTodo !== null) {
      setTodos((prevState: object[]) => {
        return Object.values(prevState);
      });

      setTodos((prev: any) => {
        let arr = prev;
        arr.splice(deleteTodo, 1);
        return arr;
      });
    }
  }, [deleteTodo, userID]);

  //set new array without the deleted one
  useEffect(() => {
    if (todos !== undefined && userID !== "") {
      const todoDeleted = async () => {
        try {
          await setDoc(doc(db, "todos", userID), Object.assign({}, todos));
          setDeleteTodo(null);
        } catch (error) {
          console.log(error);
        }
      };
      todoDeleted();
    }
  }, [todos, userID]);

  //updates the checkbox
  useEffect(() => {
    if (checkChanged === null || todos === undefined || userID === "") {
      return;
    }

    setTodos((prevState: object[]) => {
      return Object.values(prevState);
    });

    setTodos((prev: any) => {
      return prev.map((item: any, i: number) => {
        return i === checkChanged
          ? { ...item, todoIsDone: !item.todoIsDone }
          : item;
      });
    });
    setCheckChanged(null);
  }, [checkChanged, todos, userID]);

  if (todos !== undefined) {
    return (
      <TodosContainer>
        {Object.values(todos).map((value: any, i: number, { length }) => {
          //last element of the array
          if (length - 1 === i) {
            return (
              <Todo
                value={value.todo}
                last={true}
                key={value.todo}
                check={value.todoIsDone}
                index={i}
                setDeleteTodo={setDeleteTodo}
                setCheckChanged={setCheckChanged}
              />
            );
          }
          return (
            <Todo
              value={value.todo}
              key={value.todo}
              check={value.todoIsDone}
              index={i}
              setDeleteTodo={setDeleteTodo}
              setCheckChanged={setCheckChanged}
            />
          );
        })}
      </TodosContainer>
    );
  }
  //no logged user
  if (!userID) {
    return null;
  } else {
    return isLoading ? <Spinner /> : null;
  }
};

export default Todos;
