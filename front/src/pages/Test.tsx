import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import SimpleBtn from "../components/SimpleBtn";
import axios from "axios";

type TestProps = { sample: string };

/** Sample型 */
type Sample = {
  id: number;
  name: string;
  age: number;
  createDate: string;
  updateDate: string;
};

/**
 * Test Page
 * 技術検証モジュール
 * @param props
 */
const Test: React.FC<TestProps> = (props) => {
  /** style */
  const useStyle = makeStyles({
    test: {
      textAlign: "center",
    },
  });
  const classes = useStyle();

  /** state */
  const [sample, setSample] = useState<Sample[]>([]);
  const addSample = (sample: Sample) => setSample((prev) => [...prev, sample]);

  /** action */
  const click = () => {
    axios
      .get("http://localhost:8080")
      .then((r) =>
        r.data.forEach((sample: Sample) => {
          addSample(sample);
        })
      )
      .catch((r) => console.log(r));
    console.log("on click");
  };

  /** JSX */
  const hoge = () => {
    if (sample.length === 0) {
      return;
    }

    return <p>{sample[0].name}</p>;
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
        {hoge()}
      </div>
    </>
  );
};

export default Test;
