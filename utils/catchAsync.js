import errorHandler from '../handlers/errorHandler.js';

export default fn => {
  return ctx => {
    fn(ctx).catch(errorHandler);
  };
};
