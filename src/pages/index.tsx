import { GetStaticProps } from 'next';
import { api } from '../services/api';

import { Header } from '../components/Header';
import { ListCards } from '../components/ListCards';
import { Buttons } from '../components/Buttons';
import { Form } from '../components/Form';
interface Option {
  label: string,
  id: number,
}

interface FormOptions {
  optionToQueixas: Option[],
  optionToDoencas: Option[]
}

export default function Home({optionToQueixas, optionToDoencas}: FormOptions) {
  return (
    <>
      <Header></Header>
      <ListCards></ListCards>
      <Buttons></Buttons>
      <Form optionToQueixas={optionToQueixas} optionToDoencas={optionToDoencas}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>  {
  const optionsQueixas = await api.get('/queixas');
  const optionsDoencas = await api.get('/doencas');
  
  const optionToQueixas = optionsQueixas.data.data.map(option => {
      return {
          id: option.id,
          label: option.label
      };
  });

  const optionToDoencas = optionsDoencas.data.data.map(option => {
    return {
        id: option.id,
        label: option.label
    };
});
  
  return {
      props: {
          optionToQueixas,
          optionToDoencas
      },
      revalidate: 60 * 60 * 8
  }
}