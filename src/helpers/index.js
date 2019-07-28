export const getClass = (component) => component && `<${component} />`;
export const getErrorObject = (message) =>message && new Error(message);
