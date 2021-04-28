import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";

type CardProps = {
  backgroundColor: string;
  content: JSX.Element;
  height: number;
  maxWidth: number;
  title?: string;
  titleFontSize: number;
  variant: "outlined" | "elevation" | undefined;
};

type Props = CardProps;
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
    },
    title: {
      fontSize: props.titleFontSize,
    },
  });
  const classes = useStyle();
  if (props.title) {
    return (
      <>
        <Card className={classes.root} variant={props.variant}>
          <CardContent className={classes.title}>{props.title}</CardContent>
          {props.content}
        </Card>
      </>
    );
  }
  return (
    <>
      <Card className={classes.root} variant={props.variant}>
        {props.content}
      </Card>
    </>
  );
};

export default MultiCard;
