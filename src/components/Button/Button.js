import propTypes from 'prop-types';
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

Button.propTypes = {
    children:propTypes.node.isRequired,
    primary:propTypes.bool, 
    danger:propTypes.bool, 
    success:propTypes.bool, 
    outline:propTypes.bool,
    leftIcon:propTypes.node,
    rightIcon:propTypes.node,
    to:propTypes.string,
    href:propTypes.string,
    onClick:propTypes.func, 
    className:propTypes.string,
}
export default Button;