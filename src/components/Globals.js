import React, { Component } from 'react';
import axios from 'axios';
import { faFrown, faSmile, faTired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Covid = props => (
   <tr>
       <td>{props.covid.Country}</td>
       <td>{props.covid.TotalConfirmed}</td>
       <td>{props.covid.TotalDeaths}</td>
       <td>{props.covid.TotalRecovered}</td>
   </tr >
)

export default class CovidList extends Component {

   constructor(props) {
       super(props);
       this.state = { covid: [], total: [] };
   }

   componentDidMount() {
    // axios.get('https://covid19.mathdro.id/api')
       axios.get('https://api.covid19api.com/summary')
           .then(response => {
               this.setState({
                   covid: response.data.Countries,
                   total: response.data.Global
               })
           }).catch((error) => {
               console.log(error);
           })
   }

   covidList() {
       return this.state.covid.map(currentdata => {
         
           return <Covid covid={currentdata} ></Covid>

       
       })   
   }
   render() {
       return (

           <div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-4">
            <div className="card text-white bg-dark mb-3 text-left shadow">
              <div className="card-body">
                <p className="card-text">
                  Total Positif<br/>
                  <span className="font-weight-bold lead">{this.state.total.TotalConfirmed}</span>
                  <FontAwesomeIcon className="float-right fa-3x" icon={faFrown} /><br/>Orang
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-white bg-success mb-3 text-left shadow">
              <div className="card-body">
                <p className="card-text">
                  Total Sembuh<br/>
                  <span className="font-weight-bold lead">{this.state.total.TotalRecovered}</span>
                  <FontAwesomeIcon className="float-right fa-3x" icon={faSmile} /><br/>Orang
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-white bg-danger mb-3 text-left shadow">
              <div className="card-body">
                <p className="card-text">
                  Total Meninggal<br/>
                  <span className="font-weight-bold lead">{this.state.total.TotalDeaths}</span>
                  <FontAwesomeIcon className="float-right fa-3x" icon={faTired} /><br/>Orang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    

  }
}