import styles from './ListCards.module.scss';

export function ListCards() {
    return (
        <section className={styles.cards}>
            <div className="container">
                <div className={styles.cards__content}>
                    <div className={styles.date}>
                        <strong className={styles.date__day}>24</strong>
                        <span className={styles.date__month}>AGO</span>
                        <span className={styles.date__year}>2020</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__header}>
                            <i className="far fa-clock"></i>
                            <span>18:41</span>
                        </div>
                        <div className={styles.card__name}>
                            <strong>Anamnese</strong>
                        </div>
                        <div className={styles.card__content}>
                            <strong className="text">Queixa Principal</strong>
                            <span className="text">Vômito</span>
                            <strong className="text">Doenças Adulto</strong>
                            <div className={styles.tags}>
                                <span className="text">Diabetes</span>
                                <span className="text">Câncer</span>
                            </div>
                            <strong className="text">Histórico de moléstia</strong>
                            <span className="text">fortes dores de cabeça há uma semana, insônia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}