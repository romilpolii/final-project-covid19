import React from 'react';
import { faFrown, faSmile, faTired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items1: [],
      items2: [],
      isLoading: true
    }
  }

  componentDidMount() {
    Promise.all([
      //fetch('https://covid19.mathdro.id/api'),
      fetch('https://indonesia-covid-19.mathdro.id/api'),
      fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
        items1: data1, 
        items2: data2,
        isLoading: false
    }));
  } 

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { items1, items2, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="m-5">
          <p>Mohon Tunggu..<br/>Mencari Data API..</p>
        </div>
      );
    }

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card text-white bg-danger mb-3 text-left shadow">
              <div className="card-body">
                <p className="card-text">
                  Total Positif<br/>
                  <span className="font-weight-bold lead">{this.numberWithCommas(items1.jumlahKasus)}</span>
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
                  <span className="font-weight-bold lead">{this.numberWithCommas(items1.sembuh)}</span>
                  <FontAwesomeIcon className="float-right fa-3x" icon={faSmile} /><br/>Orang
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-white bg-dark mb-3 text-left shadow">
              <div className="card-body">
                <p className="card-text">
                  Total Meninggal<br/>
                  <span className="font-weight-bold lead">{this.numberWithCommas(items1.meninggal)}</span>
                  <FontAwesomeIcon className="float-right fa-3x" icon={faTired} /><br/>Orang
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-12">
            <div className="table-responsive">                  
              <table className="table table-hover text-center mt-3 small">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Provinsi</th>
                    <th scope="col">Positif</th>
                    <th scope="col">Sembuh</th>
                    <th scope="col">Meninggal</th>
                  </tr>
                </thead>
                <tbody>
                  {items2.data.map(( item, index ) => {
                    if (item.kodeProvi !== 0) {
                      return (
                        <tr key={index}>
                          <td scope="row">{index + 1}</td>
                          <td>{item.provinsi}</td>
                          <td>{item.kasusPosi}</td>
                          <td>{item.kasusSemb}</td>
                          <td>{item.kasusMeni}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
    

  }
  
}


export default Main;



