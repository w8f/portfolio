import React from "react";
import MultiCard from "../atoms/MultiCard";
import NewUserRegist from "./NewUserRegist";

/**
 * NewUser
 * ユーザ新規登録
 */
const NewUser: React.FC = () => {
  return (
    <>
      <MultiCard
        backgroundColor={"#FFFFFF"}
        children={<NewUserRegist />}
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
