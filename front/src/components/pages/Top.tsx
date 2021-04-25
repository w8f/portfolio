import { makeStyles } from "@material-ui/core";

/**
 * Top画面
 */
const Top = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1>Top</h1>
    </div>
  );
};

// style
const useStyles = makeStyles({
  main: {
    textAlign: "center",
  },
});

export default Top;
