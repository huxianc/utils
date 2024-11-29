type TFn = (...args: any[]) => any;

export function compose(middlewares: TFn[]) {
  if (!Array.isArray(middlewares)) {
    throw new TypeError("Middlewares must be an array");
  }
  const middlewaresLength = middlewares.length;
  if (middlewaresLength === 0) {
    return (arg: any) => arg;
  }

  if (middlewaresLength === 1) {
    return middlewares[0];
  }

  const dispatch = (index: number, ...params: any[]) => {
    if (index === middlewaresLength) return;
    const currentMiddleware = middlewares[index];

    currentMiddleware((...nextParams: any[]) => {
      dispatch(++index, ...nextParams);
    }, ...params);
  };

  return (...args: any[]) => dispatch(0, ...args);
}
