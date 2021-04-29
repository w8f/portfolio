import React from "react";
import MultiCard from "../atoms/MultiCard";
import SimpleBtn from "../atoms/SimpleBtn";
import MultiDivider from "../atoms/MultiDivider";
import MultiTextField from "../atoms/MultiTextField";
import { useLogin } from "../../logics/actions/login";
import UserIcon from "../atoms/UserIcon";

/**
 * Login Top画面 ユーザ情報入力欄
 * @param props
 */
const Login: React.FC = () => {
  const {
    classes,
    isOpen,
    login,
    setUserId,
    setPassword,
    setOpen,
    trialLogin,
  } = useLogin();

  /**
   * ログインコンポーネント
   * ※TODO：細分化する
   */
  const CardContent1: JSX.Element = (
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
          width={65}
        ></MultiTextField>
        <br />
        <MultiTextField
          isPassword={true}
          label={"パスワード"}
          setValue={(e) => setPassword(e.target.value)}
          sizeType={"small"}
          variant={"outlined"}
          width={15}
        ></MultiTextField>
        <br />
        <SimpleBtn
          color={"#00c4cc"}
          height={40}
          onClick={(e) => login()}
          title={"ログイン"}
          variant={"outlined"}
          width={120}
        ></SimpleBtn>
      </div>

      <MultiDivider />
      <p className={classes.title}>アカウントをお持ちでないですか？</p>
      <SimpleBtn
        color={"#00c4cc"}
        height={40}
        onClick={(e) => setOpen(!isOpen)}
        title={"新規登録する"}
        variant={"text"}
        width={120}
      ></SimpleBtn>
    </div>
  );
  /**
   * お試しログインコンポーネント
   * ※TODO：細分化する
   */
  const CardContent2: JSX.Element = (
    <div>
      <p className={classes.title}>お試しで機能を使ってみませんか？</p>
      <SimpleBtn
        color={"#00c4cc"}
        height={40}
        onClick={(e) => trialLogin()}
        title={"お試しログイン"}
        variant={"outlined"}
        width={140}
      ></SimpleBtn>
    </div>
  );

  return (
    <>
      <MultiCard
        backgroundColor={"#FFFFFF"}
        children={CardContent1}
        height={400}
        maxWidth={320}
        title={"Portfolio"}
        titleFontSize={24}
        variant={"outlined"}
      ></MultiCard>
      <div className={classes.mt20}></div>
      <MultiCard
        backgroundColor={"#FFFFFF"}
        children={CardContent2}
        height={120}
        maxWidth={320}
        titleFontSize={15}
        variant={"outlined"}
      ></MultiCard>
    </>
  );
};

export default Login;
