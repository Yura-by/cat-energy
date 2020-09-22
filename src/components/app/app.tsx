import * as React from 'react';
import PageContent from '../page-content/page-content';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <PageContent />
    </BrowserRouter>
  );
};

export default App;
