import { Header } from '../components/Header';
import { ListCards } from '../components/ListCards';
import { Buttons } from '../components/Buttons';
import { Form } from '../components/Form';

export default function Home() {
  return (
    <>
      <Header></Header>
      <ListCards></ListCards>
      <Buttons></Buttons>
      <Form></Form>
    </>
  )
}
