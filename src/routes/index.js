import Home from "~/Pages/Home";
import Upload from "~/Pages/Upload";
import Contacts from "~/Pages/Contacts";
import routesConfig from "~/config/routes";

//import Layout
import DefaultLayout from "~/components/Layouts/DefaultLayout";
import { Fragment } from "react";
const publicRouter = [
    {path: routesConfig.home, component: Home, layout: DefaultLayout},
    {path: routesConfig.contacts, component: Contacts, layout: DefaultLayout},
    {path: routesConfig.upload, component: Upload, layout: Fragment},
]
export { publicRouter }