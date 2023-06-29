import React from "react";

import {
    createBrowserRouter,
} from "react-router-dom";
// This is a type import ! It won't be actually imported in the built version. It's basically syntactic sugar to make sure we don't accidentally use properties that don't exist.
import type { RouteObject } from "react-router-dom";


import Root from "./Root";
import { loader as VariableComponentLoader } from "../components/VariableComponent";
import AboutVariables from "../pages/AboutRoutingWithAVariable";

import AppBase from "../App";
import AboutState from "../pages/AboutState";
import ExampleAboutOutside from "../pages/AboutOutsideRouter";
import AboutContext from "../pages/AboutContext";
import AboutComponents from "../pages/AboutComponents";
import AboutProps from "../pages/AboutProps";
import CheatSheet from "../pages/CheatSheet";
import GoingFurther from "../pages/GoingFurther";
// See : https://reactrouter.com/en/main/start/overview
// This is a way to massively increase reactivity of the website by using the component system from React along with 
// a logical routing and control over the URL. That way, we can do client-side (frontend side) routing instead of handling that server side.
const RoutingWithReactRouter = () => {
    const outsideOfRoot: RouteObject = {
        path: "/outsider",
        element: <ExampleAboutOutside />
    };
    const insideOfRoot: RouteObject = {
        path: "/insider",
        element: <div>
            <p>This element is inside of Root ! It has the logo above, and access to all the information from it's predecessor if needs be.</p>
        </div>
    };
    const aboutStateRoute: RouteObject = {
        path: "/aboutstate",
        element: <AboutState />
    };
    const aboutContextRoute: RouteObject = {
        path: "/aboutcontext",
        element: <AboutContext />
    };
    const defaultRoute: RouteObject = {

        path: "/",
        element: <AppBase />
    };
    const aboutComponentsRoute: RouteObject = {

        path: "/aboutcomponents",
        element: <AboutComponents />
    };
    const aboutPropsRoute: RouteObject = {

        path: "/aboutprops",
        element: <AboutProps />
    };
    const cheatSheetIntroduction: RouteObject = {

        path: "/cheatsheet",
        element: <CheatSheet />
    };
    const goingFurther: RouteObject = {

        path: "/goingfurther",
        element: <GoingFurther />
    };
    const routeWithVariable: RouteObject = {
        path: "variable/:someVariable",
        element: <AboutVariables />,
        loader: VariableComponentLoader
    };
    const routingToMainPage: RouteObject = {
        path: "/", //where our component should live in the URL scheme
        element: <Root />,
        children: [
            // Careful ! This default route needs to be first for... reasons. The router uses string matching to decide which route should be displayed, and messing the order (e.g putting something that contains the path 
            // of another route AND something else before said route will lead to issues in displaying the correct route.)
            defaultRoute,
            insideOfRoot,
            routeWithVariable,
            aboutStateRoute,
            aboutContextRoute,
            aboutComponentsRoute,
            aboutPropsRoute,
            cheatSheetIntroduction,
            goingFurther
        ]
    };

    const routes: RouteObject[] = [
        //On one side we have all our pages that are shared within a root element
        // That root element could hold the login information,
        // display a menu bar that should appear all the time, 
        // etc.
        // Here Root just has a picture, a link and a bit of text!
        routingToMainPage,
        // And here we're outside of this root that displays children. We don't have access
        // To anything within the main page logic, but we can have a completely different display.
        // This could be our login page! 
        outsideOfRoot
    ];
    return createBrowserRouter( routes );

};

export default RoutingWithReactRouter;