import Home from "~/Pages/Home";
import Upload from "~/Pages/Upload";
import Contacts from "~/Pages/Contacts";
import Following from "~/Pages/Following";
import config from "~/config";

//import Layout
import DefaultLayout from "~/layouts";
import { Fragment } from "react";
const publicRouter = [
    {path: config.routes.home, component: Home, layout: DefaultLayout},
    {path: config.routes.contacts, component: Contacts, layout: DefaultLayout},
    {path: config.routes.upload, component: Upload, layout: Fragment},
    {path: config.routes.following, component: Following, layout: DefaultLayout},
]
export { publicRouter }