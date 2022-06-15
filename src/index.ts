import { convertJsonToFaker } from './libs';
import { DataProps } from './types';

const fakerFromSchema = (json: DataProps[]) => {
  const dataArray = json.map((item: DataProps) => {
    return convertJsonToFaker(item);
  });
  return Object.assign({}, ...dataArray);
};

export { fakerFromSchema };
