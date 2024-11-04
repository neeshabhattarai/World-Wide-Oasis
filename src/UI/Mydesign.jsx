import Row from './styles/RowStyle';
import Global from './styles/Styled';
import Input from './styles/Input';
import Heading from './styles/Heading';
import Button from './styles/Button';
import styled from 'styled-components';
const Div=styled.div`display:flex`;

function App() {


    return (
      <>
   <Row as="vertical">
      <Global/>
      <Row as="horizontal">
      <div>
   <Heading>The world oasis</Heading>
   </div>
   <div>
   <Heading as="h2">Check in and out</Heading>
   <Button variant="primary" onClick={()=>alert("check in")}>check in</Button>
   <Button variant="secondary" onClick={()=>alert("check out")} size={'small'}>check out</Button>
   </div>
   </Row>
   <Heading as="h3">Form</Heading>
   {/* <h2>hii good morning</h2> */}
  <Div>
   <Input type='text' placeholder='enter the name'></Input>
   <Input type="text" placeholder='number of guest'></Input>
   </Div>
   </Row>
  
      </>
    )
  }
  
  export default App
  