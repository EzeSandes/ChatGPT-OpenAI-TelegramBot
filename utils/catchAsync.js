export default fn => {
  return ctx => {
    fn(ctx).catch(error => {
      console.log(error);
    });
  };
};
