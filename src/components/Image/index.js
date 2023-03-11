import { forwardRef, useState } from "react";
import styles from './Image.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
const cx = classNames.bind(styles);
const Image =forwardRef(({src, alt, className, fallback: customFallback = images.noImage,...props},ref)=> {
    const [fallback, setFallback] = useState('')
    const handleError =()=>{
        setFallback(customFallback)
    }
    const classes = cx('',
    {
        [className]:className
    })
    return ( 
        <img 
            ref={ref} 
            {...props} 
            className={classes} 
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
     );
})

export default Image;