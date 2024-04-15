import { get, writable } from "svelte/store";

export type Route = {
  path: string,
  title: string,
  component: string
};

export const loadRoutes = () => {
  setTimeout(() => {
    routesStore.set({
      routes: [
        { path: 'page1', title: 'Page 1', component: 'Page1' },
        { path: 'page2', title: 'Page 2', component: 'Page2' },
        { path: 'page3', title: 'Page 3', component: 'Page3' }
      ]
    });
  }, 2000);
};

const initStore = () => {
  const store = writable<{ routes: Array<Route> }>();
  store.set({ routes: [] });
  return store;
}

export const getNextPage = (location: string) => {
  const currentIndex = get(routesStore).routes.findIndex((route) => route.path === location.substring(1));
  return get(routesStore).routes[currentIndex + 1].path;
};

export const routesStore = initStore();
