import { Route, Routes } from "react-router-dom";
import styles from "./style/global.module.scss";

import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MyProfile } from "./pages/MyProfile";
import { PostPage } from "./pages/PostPage";
import { SignupPage } from "./pages/SignupPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className={styles.AppBox}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
