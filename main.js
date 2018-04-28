import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';


//import App from './client/components/App.jsx';
import LandingPage from './client/components/landingPage.jsx';
import TabularData from './client/components/tabularData.jsx';
import DataInMap from './client/components/dataInMap.jsx';
import ListData from './client/components/listData.jsx'


console.log('....', ListData);

//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
    <HashRouter>
        <div>
        {/* <Route exact path="/" component={App}/> */}
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/tabularDataView" component={TabularData}/>
        <Route exact path="/dataInMapView" component={DataInMap}/>
        <Route exact path="/listDataView" component={ListData}/>
        </div>
    </HashRouter>,
    document.getElementById('app')
);