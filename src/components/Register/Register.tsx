import { FC, FormEvent, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate, useParams } from "react-router-dom";

import {
  RegisterContainer,
  RegisterBgImg,
  Form,
  FormDiv,
  BtnSubmit,
} from "./Register.style";

const Register: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrongPassEmail, setWrongPassEmail] = useState<boolean>(false);
  const [usernameHasNumber, setUsernameHasNumber] = useState<boolean>(false);
  let { method } = useParams();
  let navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const auth = getAuth();

    if (method === "login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          //if password is wrong
          setWrongPassEmail(true);
        });
    } else if (method === "register") {
      //check if email starts with number
      if (!isNaN(Number(email[0]))) {
        setUsernameHasNumber(true);
        return;
      }

      createUserWithEmailAndPassword(auth, email, password);

      navigate("/");
    }
  };

  return (
    <RegisterContainer>
      <RegisterBgImg />
      <Form>
        <div style={{ padding: "1rem 0", textAlign: "center", color: "#fff" }}>
          <h2>{method ? method.toUpperCase() : null}</h2>
          <h2 style={{ color: "red" }}>
            {wrongPassEmail ? "Wrong password or Email" : null}
            {usernameHasNumber ? "Username can't start with number" : null}
          </h2>
        </div>
        <FormDiv>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <BtnSubmit
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          />
        </FormDiv>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
