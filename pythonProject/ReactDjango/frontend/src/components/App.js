import React, { useState } from 'react';
import '../../static/css/App.css';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import FrontHeader from './FrontHeader';
import FindTitle from './FindTitle';
import ReadContent from './ReadContent';
import MakePage from './MakePage';
import ModiFiPage from './modifiPage';
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
          <Route path="/find/:name" component={FindTitle} />
          <Route path="/read/:url" component={ReadContent} />
          <Route path="/make" component={MakePage} />
          <Route path="/modify" component={ModiFiPage} />
        </article>
      </div>
    </div>
  );
}

export default App;
