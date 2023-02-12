import { Route, Routes } from "react-router-dom";
import styles from "./style/global.module.scss";

import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MyProfile } from "./pages/MyProfile";
import { PostPage } from "./pages/PostPage";
import { SignupPage } from "./pages/SignupPage";
import { NotFound } from "./pages/NotFound";
import { SearchPage } from "./pages/SearchPage";
import { CommentPage } from "./pages/CommentPage";
import { SubscribePage } from "./pages/SubscribePage";

function App() {
  return (
    <div className={styles.AppBox}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home/:keyword" element={<HomePage />} />
        <Route path="/post/:keyword" element={<PostPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
