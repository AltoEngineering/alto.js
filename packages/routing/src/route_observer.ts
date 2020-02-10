import {Observer, ObserverInterface} from "@alto.js/runtime";

export let RouteObserver:ObserverInterface = Observer({

    currentRoute: location.pathname

});
