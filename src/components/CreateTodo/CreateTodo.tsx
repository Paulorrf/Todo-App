import { FC, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../../firebase";

import Close from "../../images/icon-cross.svg";

import { Container, Img, Form, InputText, Round } from "./CreateTodo.style";

interface UserId {
  userID: string;
}

interface Inputs {
  todo: string;
  todoIsDone: boolean;
}

const CreateTodo: FC<UserId> = ({ userID }) => {
  const [newTodo, setNewTodo] = useState<any>([]);
  let fieldIsEmpty = false;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userID === "") {
      alert("Você precisa estar logado!");
    }
    setNewTodo((prevState: object[]) => {
      return Object.values(prevState);
    });
    setNewTodo((prevState: object[]) => [...prevState, data]);
    fieldIsEmpty = false;
    reset();
  };

  useEffect(() => {
    const getTodos = async () => {
      //if user is not logged
      if (userID === "") return;

      const docRef = doc(db, "todos", userID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setNewTodo(docSnap.data());
    };
    getTodos();
  }, [userID]);

  useEffect(() => {
    if (newTodo !== undefined && newTodo.length > 0 && userID !== "") {
      const createTodo = async () => {
        //verify if the value is an object
        function isObject(val: any) {
          return val instanceof Object;
        }

        if (isObject(newTodo)) {
          await setDoc(doc(db, "todos", userID), Object.assign({}, newTodo));
        }
      };
      createTodo();
    }
  }, [newTodo, userID]);

  return (
    <Container>
      {errors.todo ? (fieldIsEmpty = true) : (fieldIsEmpty = false)}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Round>
          <input type="checkbox" id="checkbox" {...register("todoIsDone")} />
          <label htmlFor="checkbox"></label>
        </Round>

        <InputText
          type="text"
          placeholder="Create a New Todo"
          {...register("todo", { required: true })}
          noText={fieldIsEmpty}
        />

        <Img src={Close} alt="close" onClick={() => reset()} />
        <input type="submit" value="submit" style={{ display: "none" }} />
      </Form>
    </Container>
  );
};

export default CreateTodo;
