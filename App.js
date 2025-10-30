import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux'
import { StyledButton } from './StyledButton'; // Assuming you exported StyledButton
import { StyledDiv } from './StyledButton'; // Assuming you exported StyledButton
import Sample from './Sample'; // Assuming you exported StyledButton
import ContactForm from './Form'; // Assuming you exported StyledButton
import CounterStatus from './Redux'; // Assuming you exported StyledButton

import Testcontext from './TestContext';
import {store} from './store'


function App() {
  return (
    <Provider store={store}>
    <Testcontext.Provider value={{isLoggedIn:"hello"}} >
    <div className="App">
                <StyledButton>This is button</StyledButton>
                <StyledDiv>This is div</StyledDiv>
                <Sample city="kolkata" street="cllg street"></Sample>
                <ContactForm />
                <CounterStatus/>
                
    </div>
    </Testcontext.Provider>
    </Provider>
  );
}

export default App;
