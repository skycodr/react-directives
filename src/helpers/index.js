export const getClass = (func) => func && `<${func.name} />`;
export const getErrorObject = (message) =>message && new Error(message);
