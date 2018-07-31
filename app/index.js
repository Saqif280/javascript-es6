// created manually

// template literals
{
  const a = 'hello';
  const b = 'world';
  const c = `${a} ${b}!`;
  console.log(c);
}

// block scoping
{
  const a = 'something'
  {
    const a = 'something else'
    console.log(a);
  }
  console.log(a);
}


// spread operator
{
  const a = [7, 8, 9];
  const b = [6, ...a, 10];

  const add3 = (num1, num2, num3) => num1+num2+num3;
  console.log(add3(...a));

  const addAny = (...z) => z.reduce((total, value) => total+=value);
  console.log(addAny(1,2,3,4,5,...b));
}


// destructered assignment
{
  let c = [1, 2];
  let [a, b] = c;
  console.log(b);

  let d = [1, 2, 3, 4, 5];
  let [e, ...f] = d;
  console.log(f);

  let wizard = { magical: true, power: 10 };
  // note: order does not matter!
  let { power, magical } = wizard;
  console.log(magical, power);
  // reassign
  let ranger = { magical: false, power: 9 };
  ({ magical, power } = ranger);
  console.log(magical, power);
}

// arrow functions
// NOTE: they do not bind this to anything, this is inherited
{
  const blastoff = () => {
    console.log('3...2...1... blastoff!');
  }
  blastoff();
}

// map function
{
  let points = [10, 20, 30];
  points = points.map(element => element+1);
  console.log(points);
}

// filter function
{
  let scores = [90, 85, 67, 71, 70, 55, 92]
  scores = scores.filter(grade => grade >= 70);
  console.log(scores);
}