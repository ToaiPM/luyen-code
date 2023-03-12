import { useEffect, useState, useRef } from 'react'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import style from './Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style)
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2])
        },0)
    },[])
    return ( 
        <HeadlessTippy 
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <p className={cx('search-title')}>Tài khoản</p>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PropperWrapper>
                </div>
            )}
            onClickOutside={()=> setShowResult(false)}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Tìm kiếm tài khoản và video' 
                    onChange={(e)=> setSearchValue(e.target.value) }
                    onFocus={()=>setShowResult(true)}
                />
                {/**<FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                {!!searchValue && (  
                    <button className={cx('clear')} onClick={()=>{
                        setSearchValue('');
                        inputRef.current.focus()
                    }}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;