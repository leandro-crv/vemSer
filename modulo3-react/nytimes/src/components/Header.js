import Menu from "./Menu";
import styles from './Header.module.css';
import {useContext} from 'react';
import {Context} from '../context/Context';

import {MdScience} from 'react-icons/md';
import {GiHealthNormal} from 'react-icons/gi';
import {AiFillHome} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';

import User from "./User";
import Login from './Login';
import { LoginContext } from "../context/Login";

function Header(){
  const {subject} = useContext(Context);
  const {setOpenModalLogin} = useContext(LoginContext);
 
  return(
    <header className={styles.header} >
      <div className={styles.logo}>
        <div>
        { subject==='science'?
        (<MdScience/>)
        :
        subject==='world' ? 
        (<BiWorld/>)
        :
        subject==='health' ?
        (<GiHealthNormal/>)
        :
        subject==='home' ? 
        (<AiFillHome/>) : null 
      }
      </div>
        <div className={styles.subject}>{subject}</div>
      </div>
      <div>
        <User/>
        <Login/>
        <Menu/>
      </div>
    </header>
  );
}

export default Header;