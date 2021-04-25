import { Buttons } from '../Buttons';
import { api } from '../../services/api';
import { GetStaticProps } from 'next';
import styles from './Form.module.scss';

interface Option {
    label: string,
    id: number,
}

type FormOptions = {
    optionToQueixas: Option[],
    optionToDoencas: Option[]
}

export function Form({optionToQueixas, optionToDoencas}: FormOptions) {
    return (
        <section className={styles.form}>
            <div className={styles.form__header}>
                <strong>Anamnese</strong>
            </div>
            <form action="" method="post">
                <div className={styles.form__control}>
                    <label htmlFor="queixas">Queixa Principal</label>
                    <select name="Select" id="queixas">
                        <option value="Selecione">Selecione...</option>
                        {optionToQueixas.map(option => {
                          return <option value={option.label} id={String(option.id)} key={option.id}>{option.label}</option>
                        })}
                    </select>
                </div>

                <div className={styles.form__control}>
                    <label htmlFor="">Doenças Adulto</label>
                    <select name="Select" id="">
                        <option value="Selecione">Selecione...</option>
                        {optionToDoencas.map(option => {
                          return <option value={option.label} id={String(option.id)} key={option.id}>{option.label}</option>
                        })}
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
