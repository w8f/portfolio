import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
    errMsg: {
      color: "red",
      fontSize: 12,
      listStyle: "none",
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
  const [errMsgs, setErrMsgs] = useState<string[]>([]);
  const errMsgsReset = () => setErrMsgs([]);

  const history = useHistory();

  // ユーザID制約
  const userIdConstraint =
    !!userId && 4 <= userId.length && userId.length <= 30;

  // ユーザ名制約
  const userNmConstraint =
    !!userNm && 0 <= userNm.length && userNm.length <= 60;

  // メールアドレス制約
  // TODO: 正規表現チェック
  const mailConstraint = !!mail && 0 <= mail.length && mail.length <= 60;

  // パスワード制約
  // TODO: 正規表現チェック
  const passwordConstraint =
    !!password && 6 <= password.length && password.length <= 256;

  // パスワード2重チェック
  const passwordCfCheck = !!passwordCf && password === passwordCf;

  /** 画面制御 */
  // ログインボタン・活性制御
  const isLoginBtnDisabled = !userIdConstraint || !passwordConstraint;

  // 新規登録ボタン・活性制御
  const isNewBtnDisabled =
    !userIdConstraint ||
    !userNmConstraint ||
    !mailConstraint ||
    !passwordConstraint ||
    !passwordCfCheck;

  // 処理成功
  const success = (d: any) => {
    return d.data.res === "success";
  };

  /** action */
  /**
   * ログイン処理
   */
  const login = () => {
    errMsgsReset(); // error messages reset

    const param = {
      userId: userId,
      password: password,
    };
    axios
      .post("http://localhost:8080/user/login", param)
      .then((d) => {
        if (success(d)) {
          history.push("/home");
        } else {
          setErrMsgs((prev) => [
            ...prev,
            "ユーザID、またはパスワードが誤っています。",
          ]);
          console.log(d);
        }
      })
      .catch((d) => console.log(d));
  };

  /**
   * お試しログイン処理
   */
  const trialLogin = () => {
    axios
      .get("http://localhost:8080/user/trial_user")
      .then((d) => console.log(d));
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
    errMsgs,
    userId,
    setUserId,
    userNm,
    setUserNm,
    mail,
    setMail,
    password,
    setPassword,
    passwordCf,
    setPasswordCf,
    login,
    isOpen,
    setOpen,
    trialLogin,
    register,
    isNewBtnDisabled,
    isLoginBtnDisabled,
  };
};
