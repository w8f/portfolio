import { makeStyles } from "@material-ui/core";
import React from "react";
import SimpleBtn from "../components/SimpleBtn";
import axios from "axios";

type TestProps = { sample: string };
/**
 * Test Page
 * 技術検証モジュール
 * @param props
 */
const Test: React.FC<TestProps> = (props) => {
  const useStyle = makeStyles({
    test: {
      textAlign: "center",
    },
  });
  const classes = useStyle();
  const click = () => {
    axios
      .get("http://localhost:8080")
      .then((r) => console.log(r))
      .catch((r) => console.log(r));
    console.log("on click");
  };

  return (
    <>
      <div className={classes.test}>
        <h2>Test Page</h2>
        <SimpleBtn
          title={"OutLinedButtonのサンプル"}
          color={"#0dc374"}
          width={250}
          height={40}
          onClick={() => click()}
          disabled={false}
          variant={"outlined"}
        />
      </div>
    </>
  );
};

export default Test;
