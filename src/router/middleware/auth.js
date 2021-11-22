export default function guest({ next, store }) {
  const authStatus = store.getters.authStatus;
  if (!authStatus) {
    return next({
      name: "Login"
    });
  }
  return next();
}
