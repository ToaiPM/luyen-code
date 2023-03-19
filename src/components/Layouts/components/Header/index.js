import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faMessage, faCoins, faGear, faSign, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippys from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import {UploadIcon} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from "~/config/routes";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children:{
            title: 'Language',
            data: [
                {
                    type:'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type:'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: ''
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroard shortcuts',
        to: ''
    }
]
const menuUser = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
        
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings'
    },
    
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSign} />,
        title: 'Log out',
        to: '/logout',
        separate: true
    }
]
function Header() {
    const currentUser = true
    
    
    const handleSuKien=(menuItem)=>{
        switch(menuItem.type){
            case 'language':
                //
                break;
            default:
                //
                break;
        }
    }
    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={routesConfig.home}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Toai'/>
                </div>
            </Link>
            <Search />
            
            <div className={cx('actions')}>
                {
                    currentUser ? (
                        <>
                            <Tippys trigger='click' content="Upload Video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippys>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}> Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )
                }
                <Menu items={currentUser ? menuUser : MENU_ITEMS} SuKien={handleSuKien}>
                    {
                        currentUser ? (
                            <Image 
                                className={cx('user-avatar')} 
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a7b263d454d2ab77bb45c7ae5920f30~c5_300x300.webp?x-expires=1677736800&x-signature=VnhsYDBQw0ASylNKYiDaim0XvDs%3D" 
                                alt="Toai"
                            />

                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )
                    }
                </Menu>
            </div>
        </div>
    </header> 
    );
}

export default Header;