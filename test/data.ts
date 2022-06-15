import { fakerFromSchema } from '../src';

const data = [
  {
    name: 'id',
    faker: 'datatype.uuid',
  },
  {
    name: 'code',
    isUnique: true,
    faker: 'unique(random.numeric, [6, { "allowLeadingZeros": false }])',
  },
];

const a = fakerFromSchema(data);
console.log(a);
