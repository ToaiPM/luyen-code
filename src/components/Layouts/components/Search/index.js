import { useEffect, useState, useRef } from 'react'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import style from './Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import * as request from '~/ultis/request';
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
        setLoading(true)

        const fetchApi = async ()=>{
            try {
                const res = await request.get(`users/search`,{
                    params:{
                        q:debounced,
                        type: 'less'
                    }
                })
                setSearchResult(res.data) 
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchApi();

        
    },[debounced])
    return ( 
        <HeadlessTippy 
            interactive
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
                    onChange={(e)=> setSearchValue(e.target.value) }
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
    );
}

export default Search;