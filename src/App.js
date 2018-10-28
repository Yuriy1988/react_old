import React from 'react';
import SimpleForm from './Example/ReduxFormExample';

const handleAction = (a) => {
  console.log(a);
};

const App = () => (
  <SimpleForm
    handleAction={handleAction}
  />);
export default App;
