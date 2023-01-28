import { Route, Routes } from "react-router-dom";
import "./App.css";

import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MyProfile } from "./pages/MyProfile";
import { PostPage } from "./pages/PostPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
