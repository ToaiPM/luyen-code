import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)
const DefaultFn =()=>{}
function Menu({children, items=[], hideOnClick=false, SuKien = DefaultFn}) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length -1]
    const renderItems =()=>{
        return current.data.map((item, index)=> {
            
            return (
                <MenuItem key={index} data={item} onClick={()=>{
                    if(item.children){
                        setHistory(prev => [...prev,item.children])
                    }else{
                        SuKien(item)// in ra console.log(item)
                    }
                }} />
            )
        });
    }
    return (
        <Tippy
            visible={true}
            interactive
            delay={[0,700]}
            offset={[16,8]}
            hideOnClick={hideOnClick}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>
                        { history.length > 1 && <div className={cx('header-menu-sub')} onClick={()=>{
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}> <FontAwesomeIcon icon={faChevronLeft} /> Ngôn ngữ</div> }
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PropperWrapper>
                </div>
            )}
        >
            
            {children}
        </Tippy>
    );
}

export default Menu;