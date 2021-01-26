// eslint-disable-next-line no-unused-vars,import/no-extraneous-dependencies
import React, { useState } from 'react';
import '../../static/css/App.css';
// eslint-disable-next-line no-unused-vars
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
// eslint-disable-next-line no-unused-vars
import FrontHeader from './FrontHeader';
// eslint-disable-next-line no-unused-vars
import FindTitle from './FindTitle';
import ReadContent from './ReadContent';
import MakePage from './MakePage';
import ModiFiPage from './modifiPage';
// eslint-disable-next-line no-unused-vars
import SHOWSIDE from './showside';

function App() {
  return (
    <div className="app">
      <FrontHeader />
      <div className="news-contents wrapper">
        <aside>
          <SHOWSIDE />
        </aside>
        <article>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/find"
            exact
            render={() => <div>유저를 선택해주세요.</div>}
          />
          <Route path="/find/:name" component={FindTitle} name={alone} />
          <Route path="/read/:url" component={ReadContent} />
          <Route path="/make" component={MakePage} />
          <Route path="/modify" component={ModiFiPage} />
        </article>
      </div>
    </div>
  );
}

export default App;
