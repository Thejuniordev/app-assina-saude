import { Buttons } from '../Buttons';
import { api } from '../../services/api';
import Select from 'react-select'
import styles from './Form.module.scss';
import { FormEvent, useState } from 'react';

interface Option {
    label: string,
    id: number,
}

interface SetForm {
    queixa: string,
    doenca: [],
    historico: string
}
interface FormOptions {
    optionToQueixas: Option[],
    optionToDoencas: Option[],
    options: SetForm
}


export function Form({optionToQueixas, optionToDoencas, options}: FormOptions) {
    const [queixa, setQueixas] = useState<string>(); 
    const [doenca, setDoenca] = useState([]);
    const [historico, setHistorico] = useState<string>();
    const [validate, setValidate] = useState(true);

    async function setProntuario(event:FormEvent) {
        event.preventDefault();
        
        api.post('/prontuario', {
            queixa,
            doenca,
            historico
        });
    }
    
    return (
        <section className={styles.form}>
            <div className={styles.form__header}>
                <strong>Anamnese</strong>
            </div>
            <form onSubmit={setProntuario}>
                <div className={styles.form__control}>
                    <label htmlFor="queixas">Queixa Principal</label>
                    <select value={queixa} onChange={(event) => setQueixas(event.target.value)}>
                        <option value="Selecione">Selecione...</option>
                        {optionToQueixas.map(option => {
                          return <option 
                                    value={option.id} 
                                    id={String(option.id)} 
                                    key={option.id}>{option.label}</option>
                        })}
                    </select>
                </div>

                <div className={styles.form__control}>
                    <label htmlFor="">Doenças Adulto</label>
                    <select value={doenca} onChange={(event) => setDoenca([event.target.value])}>
                        <option value="Selecione">Selecione...</option>
                        {optionToDoencas.map(option => {
                          return <option value={option.id} id={String(option.id)} key={option.id}>{option.label}</option>
                        })}
                    </select>
                    <span className="text">Selecionados</span>
                    <span>{doenca}</span>
                </div>

                <div className={styles.form__control}>
                    <label htmlFor="">Histórico da Moléstia</label>
                    <textarea value={historico} onChange={(event) => setHistorico(event.target.value)}></textarea>
                </div>
                <Buttons></Buttons>
            </form>
        </section>
    )

}