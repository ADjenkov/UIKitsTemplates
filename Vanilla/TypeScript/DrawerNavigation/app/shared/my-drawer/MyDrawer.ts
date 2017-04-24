import { EventData } from 'data/observable';
import { StackLayout } from 'ui/layouts/stack-layout';

import frameModule = require("ui/frame");

let model = {
    items: [
        {
            title: "Home",
            route: "home/home"
        },
        {
            title: "Browse",
            route: "browse/browse"
        },
        {
            title: "Search",
            route: "search/search"
        },
        {
            title: "Featured",
            route: "featured/featured"
        },
        {
            title: "Settings",
            route: "settings/settings"
        }
    ]
};

// Event handler for Page "navigatingTo" event attached in tabs-page.xml
export function onLoaded(args: EventData) {
    /*
    This gets a reference this page’s <StackLayout> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <StackLayout>args.object;
    page.bindingContext = model;
}

export function onNavigateToRoute(args) {
    let tappedModelItem = model.items[args.index];
    frameModule.topmost().navigate(tappedModelItem.route);
}