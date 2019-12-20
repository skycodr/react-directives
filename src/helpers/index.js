const getClass = (component) => component && `<${component} />`;
const getErrorObject = (message) => message && new Error(message);
const isFiniteLoop = (from, to, step) => !((from < to && step < 0) || (from > to && step > 0));
const isBool = (value) => typeof value === typeof true || typeof value === typeof false;
const isFunc = (value) => typeof value === typeof Function;
export { getClass, getErrorObject, isFiniteLoop, isBool, isFunc };
