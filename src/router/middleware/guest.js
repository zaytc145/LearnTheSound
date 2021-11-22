export default function guest({ next, store }) {
  const authStatus = store.getters.authStatus;
  if (authStatus) {
    return next({
      name: "Profile"
    });
  }
  return next();
}
