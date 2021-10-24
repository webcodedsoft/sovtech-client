import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/component';
import SinglePerson from '../pages/singlePerson';

export default function Routes() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/people/:personName' component={SinglePerson} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}
