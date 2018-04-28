import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingBg">
         <img className="logo" src="../../public/images/logo.svg"/> 
         <div className="landingContent">   
         <h2>.CSV data visualization Demo Samples<br/>Using ReactJs</h2> 
         <a href='/#/tabularDataView' type="button" className="btn btn-primary">Tabular View</a>
         <a href='/#/dataInMapView' type="button" className="btn btn-success">Map View</a>
         <a href='/#/listDataView' type="button" className="btn btn-danger">List View</a>
         </div>
      </div>
    );
  }
}

export default LandingPage;
