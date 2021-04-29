import { Grid } from "@material-ui/core";
import Login from "../../organisms/Login";
import useTop from "../Top/use";
import TransitionModal from "../../atoms/TransitionModal";
import NewUser from "../../organisms/NewUser";

/**
 * Top画面
 */
const Top: React.FC = () => {
  const { classes, open, setOpen, handleClose } = useTop();

  return (
    <>
      <Grid className={classes.main} container spacing={3}>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.right}>
            <Login onRegistBtnClick={() => setOpen(!open)} />
          </div>
        </Grid>
      </Grid>
      <TransitionModal
        childWidth={320}
        open={open}
        onClose={handleClose}
        children={<NewUser />}
      />
    </>
  );
};

export default Top;
