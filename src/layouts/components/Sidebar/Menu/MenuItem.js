import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({title, to, icon}) {
    return ( 
        <NavLink className={(nav)=>cx('menu-item',{active: nav.isActive})} to={to}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
     );
}
MenuItem.propTypes = {
    title: propTypes.string.isRequired,
    to: propTypes.string.isRequired,
    icon: propTypes.node.isRequired
}
export default MenuItem;