import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
import { useState } from 'react';


const cx = classNames.bind(styles)

function Menu({children, items=[]}) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length -1]
    console.log(current.data)
    const renderItems =()=>{
        return current.data.map((item, index)=> <MenuItem key={index} data={item} />);
    }
    return (
        <Tippy
            interactive
            delay={[0,700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>
                        {renderItems()}
                    </PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;