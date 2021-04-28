import { makeStyles } from "@material-ui/core";

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
  return { classes };
};

export default useTop;
