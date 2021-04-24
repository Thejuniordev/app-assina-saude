import styles from './Buttons.module.scss';

export function Buttons() {
    return (
        <div className="container">
            <button className={styles.btn__default}>Adicionar novo prontuário</button>
        </div>
    )
}