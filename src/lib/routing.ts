import { navigateTo, type Route } from 'svelte-router-spa';
import { pageMap } from '../constants/pageMap';
import { getNextPage as getNextStorePage, type Route as SerializedRoute } from "../store/routesStore";
import Page404 from '../pages/404.svelte';

export const buildRoutes = (serializedRoutes: Array<SerializedRoute>) => {
  const routes = serializedRoutes.map(({ path, component }): Route =>
    component in pageMap
      ? { name: path, component: pageMap[component] }
      : { name: path, component: Page404 } // With svelte-router-spa we need to preload imported components when assembling the routes
  );

  if (serializedRoutes.length > 0) {
    routes.push({ name: '404', component: Page404 });
    routes.push({ name: '/', redirectTo: serializedRoutes[0].path })
  }

  return routes;
};

export const getNextPage = (currentRoute: string) => {
  console.log('next page called with', currentRoute);
  navigateTo(getNextStorePage(currentRoute));
};

export const getPage = (location: string) => {
  navigateTo(location);
};
