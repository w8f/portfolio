import React from "react";
import { Avatar, AvatarProps, makeStyles } from "@material-ui/core";

type Props = AvatarProps & {
  width: number;
  height: number;
};
/**
 * UserIcon コンポーネント
 */
const UserIcon: React.VFC<Props> = (props) => {
  const useStyle = makeStyles({
    root: {
      width: props.width,
      height: props.height,
    },
  });
  const classes = useStyle();

  return <Avatar className={classes.root}></Avatar>;
};

export default UserIcon;
