const getPropByString = (obj: any, propString: string) => {
  if (!propString) return obj;

  const props = propString.split('.');

  props.forEach((prop) => {
    const candidate = obj[prop];

    if (candidate !== undefined) {
      obj = candidate;
    } else {
      return undefined;
    }
  });

  return obj;
};

export { getPropByString };
