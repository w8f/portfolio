import React from "react";
import SimpleBtn from "../atoms/SimpleBtn";
import MultiCard from "../atoms/MultiCard";
import MultiTextField from "../atoms/MultiTextField";
import { useUser } from "../../logics/actions/user";
/**
 * ユーザ新規登録
 */
const NewUser: React.FC = () => {
  const {
    classes,
    setUserId,
    setPassword,
    setUserNm,
    setMail,
    setPasswordCf,
    register,
  } = useUser();

  const RegistForm: JSX.Element = (
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
        label={"パスワード(確認用)"}
        setValue={(e) => setPasswordCf(e.target.value)}
        sizeType={"small"}
        variant={"outlined"}
        width={260}
      ></MultiTextField>
      <div className={classes.mt20}></div>
      <SimpleBtn
        color={"#00c4cc"}
        height={40}
        onClick={() => register()}
        title={"新規登録"}
        variant={"outlined"}
        width={260}
      ></SimpleBtn>
    </div>
  );

  return (
    <>
      <MultiCard
        backgroundColor={"#FFFFFF"}
        children={RegistForm}
        height={400}
        maxWidth={320}
        title={"ユーザ登録"}
        titleFontSize={24}
        variant={"outlined"}
      ></MultiCard>
    </>
  );
};

export default NewUser;
