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
    const current = history[history.length -1] //phần tử cuối
    const renderItems =()=>{
        return current.data.map((item, index)=> {
            
            return (
                <MenuItem key={index} data={item} onClick={()=>{
                    if(item.children){
                        setHistory(prev => [...prev,item.children]) //thêm phần tử mới
                    }else{
                        SuKien(item)// in ra console.log(item)
                    }
                }} />
            )
        });
    }
    return (
        <Tippy
            interactive
            delay={[0,700]}
            offset={[16,8]}
            hideOnClick={hideOnClick} //Nhấp vào btn thì Menuitem không ẩn
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>
                        { history.length > 1 && <div className={cx('header-menu-sub')} onClick={()=>{
                            setHistory(prev => prev.slice(0, prev.length - 1)) // lấy pt[0] đến pt[lenght-1]
                        }}> <FontAwesomeIcon icon={faChevronLeft} /> Ngôn ngữ</div> }
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PropperWrapper>
                </div>
            )}
            onHide={()=>setHistory((prev)=>prev.slice(0,1))} //Kéo chuột chỗ khác, tự động trả về menu cấp cha
        >
            
            {children}
        </Tippy>
    );
}

export default Menu;