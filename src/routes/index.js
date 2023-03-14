import Home from "~/Pages/Home";
import Upload from "~/Pages/Upload";
import Contacts from "~/Pages/Contacts";

//import Layout
import DefaultLayout from "~/components/Layouts/DefaultLayout";
import { Fragment } from "react";
const publicRouter = [
    {path: '/', component: Home, layout: DefaultLayout},
    {path: '/:nickname', component: Contacts, layout: DefaultLayout},
    {path: '/upload', component: Upload, layout: Fragment},
]
export { publicRouter }