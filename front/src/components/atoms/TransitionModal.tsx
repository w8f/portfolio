import React from "react";
import {
  Backdrop,
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
  Fade,
  makeStyles,
  Modal,
  ModalProps,
} from "@material-ui/core";

type Props = ModalProps & {
  childWidth: number;
};

/**
 * Modal コンポーネント
 * @param props
 */
const TransionModal: React.FC<Props> = (props) => {
  const theme = unstable_createMuiStrictModeTheme();
  const useStyle = makeStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    child: {
      padding: theme.spacing(2, 4, 3),
      width: props.childWidth,
    },
  });
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        className={classes.modal}
        onClose={props.onClose}
        open={props.open}
      >
        <Fade in={props.open}>
          <div className={classes.child}>{props.children}</div>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
};

export default TransionModal;
