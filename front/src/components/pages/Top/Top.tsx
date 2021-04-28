import { Grid } from "@material-ui/core";
import Login from "../../organisms/Login";
import useTop from "../Top/use";

/**
 * Top画面
 */
const Top: React.FC = () => {
  const { classes } = useTop();
  return (
    <Grid className={classes.main} container spacing={3}>
      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.right}>
          <Login />
        </div>
      </Grid>
    </Grid>
  );
};

export default Top;
