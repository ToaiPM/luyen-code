import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ children, primary, danger, success, outline,leftIcon,rightIcon,to,href,onClick, className, ...passProps }) {
    let Component = 'button';
    const props = { onClick,...passProps}
    if(to){
        Component = Link
        props.to = to
    }
    else if(href){
        Component = 'a'
        props.href =href
    }
    const classes = cx('btn',{
        primary,
        danger,
        success,
        outline,
        leftIcon,
        rightIcon,
        [className]:className
    })
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            { children }
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

Button.PropTypes = {
    children:PropTypes.node.isRequired,
    primary:PropTypes.bool, 
    danger:PropTypes.bool, 
    success:PropTypes.bool, 
    outline:PropTypes.bool,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    to:PropTypes.string,
    href:PropTypes.string,
    onClick:PropTypes.func, 
    className:PropTypes.string,
}
export default Button;