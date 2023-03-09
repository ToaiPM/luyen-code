import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faMessage } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
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
                }
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
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2,3])
        },0)
    },[])
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
    const currentUser = true
    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Toai'/>
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <p className={cx('search-title')}>Tài khoản</p>
                            <AccountItem />
                            <AccountItem />
                        </PropperWrapper>
                    </div>
                  )}
            >
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                {
                    currentUser ? (
                        <>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
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
                <Menu items={MENU_ITEMS} SuKien={handleSuKien}>
                    {
                        currentUser ? (
                            <img className={cx('user-avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a7b263d454d2ab77bb45c7ae5920f30~c5_300x300.webp?x-expires=1677736800&x-signature=VnhsYDBQw0ASylNKYiDaim0XvDs%3D" alt="Toai" />

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