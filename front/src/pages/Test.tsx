import { makeStyles } from "@material-ui/core";
import React from "react";
import SimpleBtn from "../components/SimpleBtn";

type TestProps = { sample: string };
const Test: React.FC<TestProps> = (props) => {
  const useStyle = makeStyles({
    test: {
      textAlign: "center",
    },
  });
  const classes = useStyle();
  const click = () => {
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
