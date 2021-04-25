import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { ShapeProps } from "../models/ShapeProps";

type ButtonProps = JSX.IntrinsicElements["button"];
type Props = ButtonProps & { title: string } & ShapeProps;

/**
 * SimpleButton コンポーネント
 * @param props
 */
const SimpleBtn: React.FC<Props> = (props) => {
  // style
  const useStyles = makeStyles({
    btn: {
      textAlign: "center",
      color: props.color,
      width: props.width,
      height: props.height,
    },
  });
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
};

export default SimpleBtn;
