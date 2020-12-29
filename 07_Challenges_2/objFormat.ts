const objects = [
  { id: 1, name_1: 'aaa', product_1_price: 19 },
  { id: 2, name_1: 'xxx', product_1_price: 20 },
  {
    id: 3,
    name_1: 'bbb',
    product_1_price: 40,
    name_2: 'lll',
    product_2_price: 15,
  },
  {
    id: 5,
    name_1: 'ccc',
    product_1_price: 99,
    name_2: 'kkk',
    product_2_price: 120,
  },
  { id: 4, name_1: 'zzz', product_1_price: 25 },
];

let counter = 0;

const newArr = objects.flatMap((element) => {
  if (element.name_2) {
    counter++;
    let temp = [{ id: counter, name: element.name_1, price: element.product_1_price }];
    counter++;
    temp = [...temp, { id: counter, name: element.name_2, price: element.product_2_price }];
    return temp;
  }
  counter++;
  return { id: counter, name: element.name_1, price: element.product_1_price };
});

// console.log(newArr);

const newAr = objects
  .reduce((acc, item) => {
    if (item.name_2) {
      return [
        ...acc,
        {
          name: item.name_1,
          price: item.product_1_price,
        },
        {
          name: item.name_2,
          price: item.product_2_price,
        },
      ];
    }
    return [
      ...acc,
      {
        name: item.name_1,
        price: item.product_1_price,
      },
    ];
  }, [])
  .map((el, idx) => ({ id: idx + 1, ...el }));

console.log(newAr);
