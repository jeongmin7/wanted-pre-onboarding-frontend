import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/wanted-pre-onboarding-frontend"
            element={<Main />}
          ></Route>
          <Route
            path="/wanted-pre-onboarding-frontend/todo"
            element={<Todo />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>{" "}
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b9e0ff;
  overflow: hidden;
`;
