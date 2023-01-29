import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">HomePage</Link>
          <Link to="/createPost">Create a Post</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/createPost"
            element={<CreatePost />}
          />
          <Route
            path="/post/:id"
            element={<Post />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
