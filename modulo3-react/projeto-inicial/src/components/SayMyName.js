import styles from './SayMyName.module.css';

function SayMyName(props){
    const numero = props.calcular(10);
    return(
        <div className={styles.sayMyName}>
            <h1>{numero}</h1>
            <p>Fala ai {props.name}</p>
            
        </div>
    );
}

export default SayMyName;
