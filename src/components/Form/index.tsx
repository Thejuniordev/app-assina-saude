import { Buttons } from '../Buttons';

import styles from './Form.module.scss';

export function Form() {
    return (
        <section className={styles.form}>
            <div className={styles.form__header}>
                <strong>Anamnese</strong>
            </div>
            <form action="" method="post">
                <div className={styles.form__control}>
                    <label htmlFor="">Queixa Principal</label>
                    <select name="Select" id="">
                        <option value="Selecione">Selecione...</option>
                        <option value="Selecione">Selecione...</option>
                        <option value="Selecione">Selecione...</option>
                    </select>
                </div>

                <div className={styles.form__control}>
                    <label htmlFor="">Doenças Adulto</label>
                    <select name="Select" id="">
                        <option value="Selecione">Selecione...</option>
                        <option value="Selecione">Selecione...</option>
                        <option value="Selecione">Selecione...</option>
                    </select>
                    <span className="text">Selecionados</span>
                </div>

                <div className={styles.form__control}>
                    <label htmlFor="">Histórico da Moléstia</label>
                    <textarea name="" id=""></textarea>
                </div>
                <Buttons></Buttons>
            </form>
        </section>
    )
}