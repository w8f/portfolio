import { TextField, makeStyles } from "@material-ui/core";
import React from "react";

type InputProps = JSX.IntrinsicElements["input"];
type Props = InputProps & {
  isPassword?: boolean;
  label?: string;
  sizeType?: "small" | "medium";
  setValue: (e: any) => void;
  variant: "filled" | "standard" | "outlined" | undefined;
};

/**
 * MultiTextField 汎用テキストフィールド
 * @param props
 */
const MultiTextField: React.VFC<Props> = (props) => {
  const useStyle = makeStyles({
    root: {
      marginTop: 8,
    },
  });
  const classes = useStyle();

  return (
    <TextField
      className={classes.root}
      defaultValue={props.value}
      label={props.label}
      onChange={(e) => props.setValue(e)}
      size={props.sizeType}
      type={props.isPassword ? "password" : "text"}
      variant={props.variant}
    ></TextField>
  );
};

export default MultiTextField;
