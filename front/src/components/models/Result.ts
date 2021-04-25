/** Result */
export type Response = {
  cd: ResultCd;
  msg: string[];
  res: any;
};

export const success = "00";
export const exception = "80";
export const error = "90";

/**
 * ResultCd： 処理コード\
 * 00: 処理成功コード\
 * 80: 処理失敗（ユーザ操作に起因）\
 * 90: 処理失敗（システムに起因）
 */
export type ResultCd = "00" | "80" | "90";

/** 処理成功 */
export const xhrSuccess = (r: Response) => {
  return r.cd === success;
};

/** 処理成功 */
export const xhrException = (r: Response) => {
  return r.cd === exception;
};

/** 処理成功 */
export const xhrError = (r: Response) => {
  return r.cd === error;
};
