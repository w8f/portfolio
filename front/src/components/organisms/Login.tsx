import React from "react";
import MultiCard from "../atoms/MultiCard";
import { useUser } from "../../logics/actions/user";
import TrialLogin from "../molecules/TrialLogin";
import UserLogin from "../molecules/UserLogin";

type LoginProps = {
  onRegistBtnClick: () => void;
};

/**
 * Loginコンポーネント
 * 通常ログイン・お試しログイン・ユーザ新規登録画面
 * @param props
 */
const Login: React.FC<LoginProps> = (props) => {
  const { classes } = useUser();

  return (
    <>
      <MultiCard
        backgroundColor={"#FFFFFF"}
        children={
          <UserLogin onRegistBtnClick={() => props.onRegistBtnClick()} />
        }
        height={400}
        maxWidth={320}
        title={"Portfolio"}
        titleFontSize={24}
        variant={"outlined"}
      ></MultiCard>
      <div className={classes.mt20}></div>
      <MultiCard
        backgroundColor={"#FFFFFF"}
        children={<TrialLogin />}
        height={120}
        maxWidth={320}
        titleFontSize={15}
        variant={"outlined"}
      ></MultiCard>
    </>
  );
};

export default Login;
