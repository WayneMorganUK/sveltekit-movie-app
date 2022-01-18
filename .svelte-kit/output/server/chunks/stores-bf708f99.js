import { g as getContext } from "./index-bac2f3ba.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const throw_error = (verb) => {
  throw new Error(`Can only ${verb} session store in browser`);
};
const session = {
  subscribe(fn) {
    const store = getStores().session;
    return store.subscribe(fn);
  },
  set: () => throw_error("set"),
  update: () => throw_error("update")
};
export { page as p, session as s };
