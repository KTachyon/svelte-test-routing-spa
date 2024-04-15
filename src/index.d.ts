
declare module 'svelte-router-spa' {
    import { ComponentType } from 'svelte';

    export interface Route {
        name: string;
        component?: ComponentType;
        redirectTo?: string
        default?: boolean;
    }

    export interface RouterProps {
        routes: Route[];
        fallback?: SvelteComponent;
    }

    export class Router extends SvelteComponent {
        $set(props: RouterProps): void;
    }

    export function navigateTo(route: string): void;
}