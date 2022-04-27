import { FC, useState } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import {
  Container,
  BgImg,
  BgImgItems,
  TodosContainer,
  UserDiv,
  UserEmail,
  UserLogin,
  LinkStyled,
} from "./Home.style";

import { CreateTodo, Todos } from "../index";

const Home: FC = () => {
  const [user, setUser] = useState<any>();
  const [userID, setUserID] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setUserID(user.uid);
    }
  });

  const handleLogout = () => {
    signOut(auth);
    window.location.reload();
  };

  return (
    <Container>
      <BgImg>
        <BgImgItems>
          <h2>TODO</h2>
          <UserDiv>
            {user ? (
              /*User is logged */
              <UserEmail>
                <p>{user.email}</p>
                <button onClick={handleLogout}>Sair</button>
              </UserEmail>
            ) : (
              /*User is not logged */
              <UserLogin>
                <LinkStyled to="/user/register">Register</LinkStyled>
                <LinkStyled to="/user/login">Login</LinkStyled>
              </UserLogin>
            )}
          </UserDiv>
        </BgImgItems>
      </BgImg>
      <TodosContainer>
        <CreateTodo userID={userID !== "" ? userID : ""} />
        <Todos userID={userID !== "" ? userID : ""} />
      </TodosContainer>
    </Container>
  );
};

export default Home;
