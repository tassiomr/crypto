export const returnTitle = (orderByZto0) => {
  let name = 'Order By 0 to Z';

  if (orderByZto0) {
    name = 'Order By Z to 0';
  }

  return name;
};

export function cres(array) {
  return array.sort((itemA, itemB) => {
    if (itemA.name < itemB.name) {
      return -1;
    }
    if (itemA > itemB.name) {
      return 1;
    }

    return 0;
  });
}

export function desc(array) {
  return array.sort((itemA, itemB) => {
    if (itemA.name > itemB.name) {
      return -1;
    }
    if (itemA < itemB.name) {
      return 1;
    }

    return 0;
  });
}
