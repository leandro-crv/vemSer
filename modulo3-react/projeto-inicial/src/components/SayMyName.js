import styles from './SayMyName.module.css';

function SayMyName(props){
    return(
        <div className={styles.sayMyName}>
            <p>Fala ai {props.name}</p>
        </div>
    );
}

export default SayMyName;
