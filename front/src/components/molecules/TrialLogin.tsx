import React from "react";
import SimpleBtn from "../atoms/SimpleBtn";
import { useUser } from "../../logics/actions/user";

/**
 * TrialLogin
 * Login >> TrialLogin
 * お試しログインコンポーネント
 */
const TrialLogin: React.FC = () => {
  const { classes, trialLogin } = useUser();
  return (
    <div>
      <p className={classes.title}>お試しで機能を使ってみませんか？</p>
      <SimpleBtn
        color={"#00c4cc"}
        height={40}
        onClick={(e) => trialLogin()}
        title={"お試しログイン"}
        variant={"outlined"}
        width={260}
      ></SimpleBtn>
    </div>
  );
};

export default TrialLogin;
