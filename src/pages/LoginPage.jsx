import { useInput } from "../hooks/useInput";
import "../style/basicStyle.scss";

export const LoginPage = () => {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();

  return (
    <div>
      <h2>ToonDa</h2>
      <img />
      <input type="text" value={email} onChange={onChangeEmail} />
      <input type="password" vlaue={password} onChange={onChangePassword} />
      <button>로그인하기</button>
      <button>카카오톡으로 로그인하기</button>
      <div className="SassComponent">
        <div className="box red" />
        <div className="box green" />
        <div className="box yellow" />
      </div>
    </div>
  );
};
