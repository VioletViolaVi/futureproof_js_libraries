// paradigms
// imperative - give instructions in a row
// object-oriented - code should model reality
// functional programming - code is a pipeline

// map -> do same thing to every element & return result
// filter -> only keep each element if passes test

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr
  .map((singleItem) => {
    return singleItem * 2;
  })
  .map((singleItem) => {
    return singleItem - 1;
  });

const result2 = arr
  .map((singleItem) => {
    return singleItem * 2;
  })
  .filter((singleItem) => {
    return singleItem > 8;
  });

console.log(result2);
