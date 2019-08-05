interface RouterInterface {
}
export declare class Router implements RouterInterface {
    static route(path?: string): string;
    static goToRoute(route: string): void;
    static replaceRoute(route: string): void;
    static routeAtIndex(idx: number): string;
}
export {};
//# sourceMappingURL=router.d.ts.map