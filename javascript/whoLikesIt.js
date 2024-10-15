function likes(names) {
  let count = names.length;
  if (count === 0) return "no one likes this";

  const [first, seccond, third, ...rest] = names;

  return count === 1
    ? `${first} likes this`
    : count === 2
    ? `${first}, ${seccond} likes this`
    : count === 3
    ? `${first}, ${seccond}, ${third} likes this`
    : `${first}, ${seccond}, and ${count - 2} others like this`;
}

console.log(likes(["Max", "John", "Mark", "Alex", "Josh"]));
