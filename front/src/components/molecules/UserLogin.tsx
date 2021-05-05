import React from "react";
import { useUser } from "../../logics/actions/user";
import MultiTextField from "../atoms/MultiTextField";
import UserIcon from "../atoms/UserIcon";
import SimpleBtn from "../atoms/SimpleBtn";
import MultiDivider from "../atoms/MultiDivider";

type LoginProps = {
  onRegistBtnClick: () => void;
};
/**
 * UserLogin
 * Login >> UserLogin
 * ログイン情報入力コンポーネント
 */
const UserLogin: React.FC<LoginProps> = (props) => {
  const {
    classes,
    login,
    isLoginBtnDisabled,
    setUserId,
    setPassword,
  } = useUser();
  return (
    <div className={classes.content}>
      <div className={classes.centering}>
        <UserIcon width={60} height={60} />
      </div>
      <div className={classes.mt20}>
        <MultiTextField
          label={"ユーザID"}
          setValue={(e) => setUserId(e.target.value)}
          sizeType={"small"}
          variant={"outlined"}
          width={260}
        ></MultiTextField>
        <br />
        <MultiTextField
          isPassword={true}
          label={"パスワード"}
          setValue={(e) => setPassword(e.target.value)}
          sizeType={"small"}
          variant={"outlined"}
          width={260}
        ></MultiTextField>
        <br />
        <SimpleBtn
          color={"#00c4cc"}
          disabled={isLoginBtnDisabled}
          height={40}
          onClick={(e) => login()}
          title={"ログイン"}
          variant={"outlined"}
          width={260}
        ></SimpleBtn>
      </div>

      <MultiDivider />
      <p className={classes.title}>アカウントをお持ちでないですか？</p>
      <SimpleBtn
        color={"#00c4cc"}
        height={40}
        onClick={() => props.onRegistBtnClick()}
        title={"新規登録する"}
        variant={"text"}
        width={260}
      ></SimpleBtn>
    </div>
  );
};

export default UserLogin;
