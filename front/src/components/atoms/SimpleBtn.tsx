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
      color: props.color,
      height: props.height,
      marginTop: 12,
      textAlign: "center",
      width: props.width,
    },
  });
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      color={props.btnColor}
      disabled={props.disabled}
      onClick={props.onClick}
      variant={props.variant}
    >
      {props.title}
    </Button>
  );
};

export default SimpleBtn;
