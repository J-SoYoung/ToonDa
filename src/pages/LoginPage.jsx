import { useNavigate } from "react-router-dom";
import { DeveloperInfo } from "../components/DeveloperInfo";
import { useInput } from "../hooks/useInput";
import styles from "../style/loginPageStyle.module.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();

  return (
    <>
      <div className={styles.loginBox}>
        <div className={styles.logoBox}>
          <img src="/img/test.jpg" />
          <h2>ToonDa</h2>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputList}>
            <p>이메일</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className={styles.inputList}>
            <p>비밀번호</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button>로그인하기</button>
          <span>또는</span>
          <button>카카오톡으로 로그인하기</button>
          <span onClick={() => navigate("/signup")}>회원가입하러 가기</span>
        </div>
      </div>
      <DeveloperInfo />
    </>
  );
};
