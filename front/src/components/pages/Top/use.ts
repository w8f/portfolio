import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useTop = () => {
  // style
  const useStyles = makeStyles({
    main: {
      backgroundColor: "#FAFAFA",
      textAlign: "center",
    },
    right: {
      marginLeft: 15,
      marginTop: 120,
    },
  });
  const classes = useStyles();

  /** state */
  const [open, setOpen] = useState(false);

  /** action */
  const handleClose = () => setOpen(false);
  return { classes, open, setOpen, handleClose };
};

export default useTop;
