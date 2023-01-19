import './App.css';
import styled from 'styled-components';


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`; 

function App() {
  return (
    <div className="App">
      <Button as="a" href="https://utd.edu.mx" target="_blank">UTD</Button>
      <Button as="a" href="https://github.com/jfassj" target="_blank">GITHUB</Button>
      <Button as="a" href="https://twitter.com/jfassj" target="_blank">TWITTER</Button>
    </div>
  );
}

export default App;
