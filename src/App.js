import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Main from './components/Main';
import Footer from './components/common/Footer';
import Globaldata from './components/common/Globaldata';
import Globals from './components/Globals';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-lg-10">
              <div className="card text-center shadow rounded">
              <Globaldata/>
              <Globals/>
              <div className="card-body" id="content"></div>
              <Navbar/>
              <div className="card-body" id="content">
                <Main/>
                </div>
                <Footer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
