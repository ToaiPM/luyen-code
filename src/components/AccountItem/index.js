import classNames from "classnames/bind";
import Image from "../Image";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src={data.avatar} 
                alt={data.full_name} 
            />
            <div className={cx('content')}>
                <p className={cx('name')}>{data.full_name} 
                    <span className={cx('name-icon')}>{data.tick && <FontAwesomeIcon icon={faCircleCheck} />}</span> 
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;