import { makeStyles } from "@material-ui/core";
import { useState } from "react";

export const useLogin = () => {
  /** style */
  const useStyle = makeStyles({
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
  const [isOpen, setOpen] = useState(false);

  /** action */
  /**
   * ログイン処理
   */
  const login = () => {
    console.log("login");
  };

  /**
   * お試しログイン処理
   */
  const trialLogin = () => {
    console.log("trial");
  };

  return {
    classes,
    userId,
    setUserId,
    setPassword,
    login,
    isOpen,
    setOpen,
    trialLogin,
  };
};
