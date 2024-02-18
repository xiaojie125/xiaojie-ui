const req = require.context("./svg", false, /\.svg$/);
// const requireAll = (requireContext) => {
//   console.log(requireContext.keys());
//   requireContext.keys().map(requireContext);
// };
// requireAll(req);
req.keys().forEach((item) => req(item));
