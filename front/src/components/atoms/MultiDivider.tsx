import React from "react";
import { Divider, makeStyles } from "@material-ui/core";

type Props = {};

/**
 * Divider 汎用コンポーネント
 * @param props
 */
const MultiDivider: React.VFC<Props> = (props) => {
  const useStyle = makeStyles({
    root: {
      margin: 20,
    },
  });
  const classes = useStyle();

  return <Divider className={classes.root}></Divider>;
};

export default MultiDivider;
