import React from "react";
import SimpleBtn from "../atoms/SimpleBtn";
import MultiTextField from "../atoms/MultiTextField";
import { useUser } from "../../logics/actions/user";

/**
 * NewUserRegist
 * NewUser >> NewUserRegist
 * ユーザ新規登録入力フォームコンポーネント
 */
const NewUserRegist: React.FC = () => {
  const {
    classes,
    setUserId,
    setPassword,
    setUserNm,
    setMail,
    setPasswordCf,
    register,
    isNewBtnDisabled,
  } = useUser();
  return (
    <div className={classes.content}>
      <MultiTextField
        label={"ユーザID"}
        setValue={(e) => setUserId(e.target.value)}
        sizeType={"small"}
        variant={"outlined"}
        width={260}
      ></MultiTextField>
      <br />
      <MultiTextField
        label={"ユーザネーム"}
        setValue={(e) => setUserNm(e.target.value)}
        sizeType={"small"}
        variant={"outlined"}
        width={260}
      ></MultiTextField>
      <br />
      <MultiTextField
        label={"メールアドレス"}
        setValue={(e) => setMail(e.target.value)}
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
      <MultiTextField
        isPassword={true}
        label={"パスワード(確認用)"}
        setValue={(e) => setPasswordCf(e.target.value)}
        sizeType={"small"}
        variant={"outlined"}
        width={260}
      ></MultiTextField>
      <div className={classes.mt20}></div>
      <SimpleBtn
        color={"#00c4cc"}
        disabled={isNewBtnDisabled}
        height={40}
        onClick={() => register()}
        title={"新規登録"}
        variant={"outlined"}
        width={260}
      ></SimpleBtn>
    </div>
  );
};

export default NewUserRegist;
