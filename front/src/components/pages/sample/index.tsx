import React from "react";
import SimpleBtn from "../../atoms/SimpleBtn";
import { useSample } from "./use";

type TestProps = { sample: string };

/**
 * Sample Page
 * 技術検証モジュール
 * @param props
 */
const Sample: React.FC<TestProps> = (props) => {
  const { classes, sample, onClickSampleBtn } = useSample();

  /** JSX */
  const hoge = () => {
    if (sample.length === 0) {
      return;
    }

    const hogejsx: JSX.Element[] = [];
    sample.forEach((s, idx) => {
      hogejsx.push(
        <p key={idx}>
          {s.name}, {s.age}歳
        </p>
      );
    });
    return hogejsx;
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
          onClick={() => onClickSampleBtn()}
          disabled={false}
          variant={"outlined"}
        />
        {hoge()}
      </div>
    </>
  );
};

export default Sample;
