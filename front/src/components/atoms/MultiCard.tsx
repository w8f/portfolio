import React from "react";
import { Card, CardContent, CardProps, makeStyles } from "@material-ui/core";

type Props = CardProps & {
  backgroundColor: string;
  content?: JSX.Element;
  height?: number;
  maxWidth: number;
  title?: string;
  titleFontSize: number;
  variant: "outlined" | "elevation" | undefined;
};

/**
 * MultiCard 汎用カード
 * @param props
 */
const MultiCard: React.VFC<Props> = (props) => {
  const useStyle = makeStyles({
    root: {
      backgroundColor: props.backgroundColor,
      height: props.height,
      maxWidth: props.maxWidth,
      padding: 15,
    },
    title: {
      textAlign: "center",
      fontSize: props.titleFontSize,
    },
  });
  const classes = useStyle();
  if (props.title) {
    return (
      <>
        <Card className={classes.root} variant={props.variant}>
          <CardContent className={classes.title}>{props.title}</CardContent>
          {props.children}
        </Card>
      </>
    );
  }
  return (
    <>
      <Card className={classes.root} variant={props.variant}>
        {props.children}
      </Card>
    </>
  );
};

export default MultiCard;
