import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

/**
 * useUser
 * ユーザ新規登録 / ユーザログイン処理
 */
export const useUser = () => {
  /** style */
  const useStyle = makeStyles({
    centering: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
    content: {
      textAlign: "center",
    },
    mt20: {
      marginTop: 20,
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 0,
      marginTop: 20,
    },
  });
  const classes = useStyle();

  /** state */
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCf, setPasswordCf] = useState<string>("");
  const [userNm, setUserNm] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [isOpen, setOpen] = useState(false);

  /** action */
  /**
   * ログイン処理
   */
  const login = () => {
    const param = {
      userId: userId,
      password: password,
    };
    axios
      .post("http://localhost:8080/user/login", param)
      .then((d) => console.log(d))
      .catch((d) => console.log(d));
  };

  /**
   * お試しログイン処理
   */
  const trialLogin = () => {
    axios.get("http://localhost:8080/user/1").then((d) => console.log(d));
    console.log("trial");
  };

  /**
   * ユーザ登録
   */
  const register = () => {
    const param = {
      userId: userId,
      userNm: userNm,
      mail: mail,
      password: password,
    };

    axios
      .post("http://localhost:8080/user/new", param)
      .then((d) => console.log(d))
      .catch((d) => console.log(d));
  };

  return {
    classes,
    userId,
    setUserId,
    setUserNm,
    setPassword,
    setMail,
    setPasswordCf,
    login,
    isOpen,
    setOpen,
    trialLogin,
    register,
  };
};
