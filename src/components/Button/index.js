import classNames from "classnames/bind";
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ children, primary, danger, success, outline }) {
    let Component = 'button';
    const classes = cx('btn',{
        primary,
        danger,
        success,
        outline
    })
    return (
        <Component 
            className={classes}
        >
            { children }
        </Component>
    );
}

export default Button;