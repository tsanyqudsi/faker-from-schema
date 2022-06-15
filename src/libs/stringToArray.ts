const stringToArray = (str: string) => {
  if (str.startsWith('[')) {
    return JSON.parse(str);
  } else {
    return str.split(',').map((item) => item.trim());
  }
};

export { stringToArray };
