const parseFunctionParams = (funcString: string) => {
  const params = funcString.match(/\((.*)\)/);
  if (params) {
    const paramStr = params[1].split(/,(?![^\[]*\])|(?=\[)|(?=\()/);
    return paramStr.map((param) => param.trim()).filter((param) => param.length > 0);
  } else return [];
};

export { parseFunctionParams };
