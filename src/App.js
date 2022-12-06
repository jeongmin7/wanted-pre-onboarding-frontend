import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="*" element={<NotFound />}></Route>{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
