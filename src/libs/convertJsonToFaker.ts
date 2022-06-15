import { faker } from '@faker-js/faker';
import { parseFunctionParams, getPropByString, stringToArray } from '.';

const convertJsonToFaker = (object: any) => {
  if (object.isUnique) {
    const uniqueArray = parseFunctionParams(object.faker);
    return {
      [object.name]: faker.unique(
        getPropByString(faker, uniqueArray[0]),
        stringToArray(uniqueArray[1])
      ),
    };
  } else {
    return {
      [object.name]: getPropByString(faker, object.faker)(),
    };
  }
};

export { convertJsonToFaker };
