import classNames from "classnames/bind";
import config from "~/config";
import styles from './Sidebar.module.scss'
import Menu, {MenuItem} from "./Menu";
import { HomeIcon } from "~/components/Icons";

const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
    <div className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon/>} />
            <MenuItem title="Following" to={config.routes.following} icon={<HomeIcon/>} />
        </Menu>
    </div>
    );
}

export default Sidebar;