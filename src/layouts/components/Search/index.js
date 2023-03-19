import { useEffect, useState, useRef } from 'react'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import style from './Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import * as searchSevices  from '~/services/searchService';

const cx = classNames.bind(style)
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(()=>{
        if(!debounced.trim()){
            setSearchResult([])
            return;
        }
        const fetchApt = async ()=>{
            setLoading(true)
            const result = await searchSevices.search(debounced)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApt()
    },[debounced])
    const handleChange =(e)=>{
        //const search = e.target.value;
        if(!(e.target.value).startsWith(' ')){
            setSearchValue(e.target.value)
        }
    }
    return ( 
        // Sử dụng thẻ div hoặc span để fix warning HeadlessTippy
        <div>
            <HeadlessTippy 
                interactive
                //appendTo={()=> document.body} //fix lỗi warning trình duyệt
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <p className={cx('search-title')}>Tài khoản</p>
                            {searchResult.map((result)=>(
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                        onChange={handleChange}
                        onFocus={()=>setShowResult(true)}
                    />
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> }
                    {!!searchValue && !loading && (  
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
        </div>
    );
}

export default Search;