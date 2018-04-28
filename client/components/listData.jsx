import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Overlay,Popover} from 'react-bootstrap';
const CountyData = {
    "County": "Clearfield",
    "Population": 76508,
    "Population MOE": 432,
    "Uninsured": 7838,
    "Uninsured MOE": 644,
    "Uninsured Pct": "10.2%",
    "Uninsured Pct MOE": "0.8%",
    "Population - Under 18 years": 15642,
    "Population - Under 18 years MOE": 99,
    "Population - Under 18 years - Uninsured": 606,
    "Population - Under 18 years - Uninsured MOE": 166,
    "Population - Under 18 years - Uninsured Pct": "3.9%",
    "Population - Under 18 years - Uninsured Pct MOE": "1.1%",
    "Population - 18 to 64 years": 46820,
    "Population - 18 to 64 years MOE": 356,
    "Population - 18 to 64 years - Uninsured": 7197,
    "Population - 18 to 64 years - Uninsured MOE": 572,
    "Population - 18 to 64 years - Uninsured Pct": "15.4%",
    "Population - 18 to 64 years - Uninsured Pct MOE": "1.2%",
    "Population - 65 years and older": 14046,
    "Population - 65 years and older MOE": 201,
    "Population - 65 years and older - Uninsured": 35,
    "Population - 65 years and older - Uninsured MOE": 33,
    "Population - 65 years and older - Uninsured Pct": "0.2%",
    "Population - 65 years and older - Uninsured Pct MOE": "0.2%",
    "Population - 19 to 25 years": 5871,
    "Population - 19 to 25 years MOE": 270,
    "Population - 19 to 25 years - Uninsured": 1290,
    "Population - 19 to 25 years - Uninsured MOE": 228,
    "Population - 19 to 25 years - Uninsured Pct": "22%",
    "Population - 19 to 25 years - Uninsured Pct MOE": "3.4%",
    "Male": 38060,
    "Male MOE": 337,
    "Male - Uninsured": 4304,
    "Male - Uninsured MOE": 419,
    "Male - Uninsured Pct": "11.3%",
    "Male - Uninsured Pct MOE": "1.1%",
    "Female": 38448,
    "Female MOE": 207,
    "Female - Uninsured": 3534,
    "Female - Uninsured MOE": 366,
    "Female - Uninsured Pct": "9.2%",
    "Female - Uninsured Pct MOE": "0.9%",
    "Race - One Race": 75964,
    "Race - One Race MOE": 402,
    "Race - One Race - Uninsured": 7777,
    "Race - One Race - Uninsured MOE": 645,
    "Race - One Race - Uninsured Pct": "10.2%",
    "Race - One Race - Uninsured Pct MOE": "0.8%",
    "Race - One Race - White": 75369,
    "Race - One Race - White MOE": 355,
    "Race - One Race - White - Uninsured": 7680,
    "Race - One Race - White - Uninsured MOE": 636,
    "Race - One Race - White - Uninsured Pct": "10.2%",
    "Race - One Race - White - Uninsured Pct MOE": "0.8%",
    "Race - One Race - Black or African American": 74,
    "Race - One Race - Black or African American MOE": 135,
    "Race - One Race - Black or African American - Uninsured": 4,
    "Race - One Race - Black or African American - Uninsured MOE": 15,
    "Race - One Race - Black or African American - Uninsured Pct": "5.4%",
    "Race - One Race - Black or African American - Uninsured Pct MOE": "60.1%",
    "Race - One Race - American Indian and Alaska Native": 77,
    "Race - One Race - American Indian and Alaska Native MOE": 36,
    "Race - One Race - American Indian and Alaska Native - Uninsured": 16,
    "Race - One Race - American Indian and Alaska Native - Uninsured MOE": 18,
    "Race - One Race - American Indian and Alaska Native - Uninsured Pct": "20.8%",
    "Race - One Race - American Indian and Alaska Native - Uninsured Pct MOE": "22.5%",
    "Race - One Race - Asian": 370,
    "Race - One Race - Asian MOE": 96,
    "Race - One Race - Asian - Uninsured": 37,
    "Race - One Race - Asian - Uninsured MOE": 36,
    "Race - One Race - Asian - Uninsured Pct": "10%",
    "Race - One Race - Asian - Uninsured Pct MOE": "9.6%",
    "Race - One Race - Native Hawaiian and Other Pacific Islander": 0,
    "Race - One Race - Native Hawaiian and Other Pacific Islander MOE": 24,
    "Race - One Race - Native Hawaiian and Other Pacific Islander - Uninsured": 0,
    "Race - One Race - Native Hawaiian and Other Pacific Islander - Uninsured MOE": 24,
    "Race - One Race - Native Hawaiian and Other Pacific Islander - Uninsured Pct": "",
    "Race - One Race - Native Hawaiian and Other Pacific Islander - Uninsured Pct MOE": "",
    "Race - One Race - Some other race": 74,
    "Race - One Race - Some other race MOE": 60,
    "Race - One Race - Some other race - Uninsured": 40,
    "Race - One Race - Some other race - Uninsured MOE": 50,
    "Race - One Race - Some other race - Uninsured Pct": "54.1%",
    "Race - One Race - Some other race - Uninsured Pct MOE": "36.6%",
    "Race - Two or more races": 544,
    "Race - Two or more races MOE": 165,
    "Race - Two or more races - Uninsured": 61,
    "Race - Two or more races - Uninsured MOE": 52,
    "Race - Two or more races - Uninsured Pct": "11.2%",
    "Race - Two or more races - Uninsured Pct MOE": "8.2%",
    "White, not Hispanic or Latino": 74402,
    "White, not Hispanic or Latino MOE": 286,
    "White, not Hispanic or Latino - Uninsured": 7467,
    "White, not Hispanic or Latino - Uninsured MOE": 607,
    "White, not Hispanic or Latino - Uninsured Pct": "10%",
    "White, not Hispanic or Latino - Uninsured Pct MOE": "0.8%",
    "Hispanic or Latino (of any race)": 1090,
    "Hispanic or Latino (of any race) MOE": 198,
    "Hispanic or Latino (of any race) - Uninsured": 275,
    "Hispanic or Latino (of any race) - Uninsured MOE": 205,
    "Hispanic or Latino (of any race) - Uninsured Pct": "25.2%",
    "Hispanic or Latino (of any race) - Uninsured Pct MOE": "17.6%",
    "Household Income": 76355,
    "Household Income MOE": 437,
    "Household Income - Uninsured": 7825,
    "Household Income - Uninsured MOE": 647,
    "Household Income - Uninsured Pct": "10.2%",
    "Household Income - Uninsured Pct MOE": "0.8%",
    "Household Income - Under $25,000": 15993,
    "Household Income - Under $25,000 MOE": 868,
    "Household Income - Under $25,000 - Uninsured": 2532,
    "Household Income - Under $25,000 - Uninsured MOE": 378,
    "Household Income - Under $25,000 - Uninsured Pct": "15.8%",
    "Household Income - Under $25,000 - Uninsured Pct MOE": "2%",
    "Household Income - $25,000 to $49,999": 21525,
    "Household Income - $25,000 to $49,999 MOE": 1060,
    "Household Income - $25,000 to $49,999 - Uninsured": 2456,
    "Household Income - $25,000 to $49,999 - Uninsured MOE": 368,
    "Household Income - $25,000 to $49,999 - Uninsured Pct": "11.4%",
    "Household Income - $25,000 to $49,999 - Uninsured Pct MOE": "1.5%",
    "Household Income - $50,000 to $74,999": 17681,
    "Household Income - $50,000 to $74,999 MOE": 1107,
    "Household Income - $50,000 to $74,999 - Uninsured": 1488,
    "Household Income - $50,000 to $74,999 - Uninsured MOE": 341,
    "Household Income - $50,000 to $74,999 - Uninsured Pct": "8.4%",
    "Household Income - $50,000 to $74,999 - Uninsured Pct MOE": "1.8%",
    "Household Income - $75,000 to $99,999": 9902,
    "Household Income - $75,000 to $99,999 MOE": 839,
    "Household Income - $75,000 to $99,999 - Uninsured": 692,
    "Household Income - $75,000 to $99,999 - Uninsured MOE": 247,
    "Household Income - $75,000 to $99,999 - Uninsured Pct": "7%",
    "Household Income - $75,000 to $99,999 - Uninsured Pct MOE": "2.4%",
    "Household Income - $100,000 and over": 11254,
    "Household Income - $100,000 and over MOE": 967,
    "Household Income - $100,000 and over - Uninsured": 657,
    "Household Income - $100,000 and over - Uninsured MOE": 173,
    "Household Income - $100,000 and over - Uninsured Pct": "5.8%",
    "Household Income - $100,000 and over - Uninsured Pct MOE": "1.5%",
    "Ratio of Income to Poverty Level": 76142,
    "Ratio of Income to Poverty Level MOE": 448,
    "Ratio of Income to Poverty Level - Uninsured": 7838,
    "Ratio of Income to Poverty Level - Uninsured MOE": 644,
    "Ratio of Income to Poverty Level - Uninsured Pct": "10.3%",
    "Ratio of Income to Poverty Level - Uninsured Pct MOE": "0.8%",
    "Ratio of Income to Poverty Level - Under 1.38 of poverty": 18270,
    "Ratio of Income to Poverty Level - Under 1.38 of poverty MOE": 1134,
    "Ratio of Income to Poverty Level - Under 1.38 of poverty - Uninsured": 3346,
    "Ratio of Income to Poverty Level - Under 1.38 of poverty - Uninsured MOE": 446,
    "Ratio of Income to Poverty Level - Under 1.38 of poverty - Uninsured Pct": "18.3%",
    "Ratio of Income to Poverty Level - Under 1.38 of poverty - Uninsured Pct MOE": "2.1%",
    "Ratio of Income to Poverty Level - 1.38 to 1.99 of poverty": 10820,
    "Ratio of Income to Poverty Level - 1.38 to 1.99 of poverty MOE": 809,
    "Ratio of Income to Poverty Level - 1.38 to 1.99 of poverty - Uninsured": 1189,
    "Ratio of Income to Poverty Level - 1.38 to 1.99 of poverty - Uninsured MOE": 237,
    "Ratio of Income to Poverty Level - 1.38 to 1.99 of poverty - Uninsured Pct": "11%",
    "Ratio of Income to Poverty Level - 1.38 to 1.99 of poverty - Uninsured Pct MOE": "2%",
    "Ratio of Income to Poverty Level - 2.00 of poverty and over": 47052,
    "Ratio of Income to Poverty Level - 2.00 of poverty and over MOE": 1183,
    "Ratio of Income to Poverty Level - 2.00 of poverty and over - Uninsured": 3303,
    "Ratio of Income to Poverty Level - 2.00 of poverty and over - Uninsured MOE": 375,
    "Ratio of Income to Poverty Level - 2.00 of poverty and over - Uninsured Pct": "7%",
    "Ratio of Income to Poverty Level - 2.00 of poverty and over - Uninsured Pct MOE": "0.8%",
    "Location 1": "Pennsylvania\n(40.789676, -77.858055)"
  }

  
class ListData extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleClick = e => {
          this.setState({ target: e.target, show: !this.state.show });
        };
    
        this.state = {
          show: false
        };
      }
  render() {
    return (
      <div className="col-md-12 listView">
         <a href="/"><img className="logo" src="../../public/images/logo.svg"/> </a>   
         <h2 className="pull-right">Data visualization as List</h2>
      <div className="clearfix"></div> 
      <hr/>
      <div className="listBlock" onClick={this.handleClick}>
          <img src="../../public/images/Clearfield_County.jpg"/>
          <h3 >Clearfield</h3>
      </div>
      <div className="listBlock" onClick={this.handleClick}>
          <img src="../../public/images/Beaver_County.jpg"/>
          <h3>Beaver</h3>
      </div>
      <div className="listBlock" onClick={this.handleClick}>
          <img src="../../public/images/Forest_County.jpg"/>
          <h3>Forest</h3>
      </div>
      <div className="listBlock" onClick={this.handleClick}>
          <img src="../../public/images/Mifflin_County.jpg"/>
          <h3>Mifflin</h3>
      </div>
      <div className="listBlock" onClick={this.handleClick}>
          <img src="../../public/images/Cameron_County.jpg"/>
          <h3>Cameron</h3>
      </div>

      <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="right"
          container={this}
          containerPadding={20}
          bsStyle="primary"
        >
          <Popover id="popover-contained" title={CountyData.County}>
          <table className="dataList" cellSpacing="1">
        {
            //Object.keys(CountyData)
            Object.keys(CountyData).map(function(key,i) {
                //console.log(key, CountyData[key]);
                //console.log('<li>'+key+':'+CountyData[key]+' </li>');
                return (<tr key={i}><td style={{'textAlign':'center'}}>{i+1}</td><td>{key}</td> <td > : &nbsp; {CountyData[key]}</td></tr>)
            })
            }
            </table>
          </Popover>
        </Overlay>
      </div>
    );
  }
}

export default ListData;
