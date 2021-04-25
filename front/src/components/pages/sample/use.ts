import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { xhrSuccess } from "../../models/Result";

export const useSample = () => {
  /** style */
  const useStyle = makeStyles({
    test: {
      textAlign: "center",
    },
  });
  const classes = useStyle();

  /** state */
  const [sample, setSample] = useState<Sample[]>([]);

  const onClickSampleBtn = () => {
    axios
      .get("http://localhost:8080/sample")
      .then((d) => {
        if (xhrSuccess(d.data)) {
          d.data.res.forEach((sample: Sample) => {
            setSample((prev) => [...prev, sample]);
          });
        }
        return d.data.res;
      })
      .catch((r) => console.log(r));
  };

  /** Sample型 */
  type Sample = {
    id: number;
    name: string;
    age: number;
    createDate: string;
    updateDate: string;
  };

  return { classes, sample, onClickSampleBtn };
};
