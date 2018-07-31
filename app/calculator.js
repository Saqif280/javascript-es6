const add = (x,y) => x+y;
const multiply = (x,y) => x*y;

// export multiple variables at once
export { add, multiply };
// can only export default once variable is declared
export default multiply;