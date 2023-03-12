import classNames from "classnames/bind";
import Image from "../Image";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a7b263d454d2ab77bb45c7ae5920f30~c5_300x300.webp?x-expires=1677736800&x-signature=VnhsYDBQw0ASylNKYiDaim0XvDs%3D" 
                alt="Toai" 
            />
            <div className={cx('content')}>
                <p className={cx('name')}>Nguyen tan Toai <span className={cx('name-icon')}><FontAwesomeIcon icon={faCircleCheck} /></span> </p>
                <span className={cx('username')}>nttoai</span>
            </div>
        </div>
    );
}

export default AccountItem;