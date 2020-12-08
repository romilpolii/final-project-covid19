import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
      <div className="bg-dark text-white small rounded">            
        <div className="row pt-3 px-3">
          <div className="col-sm-12 text-center">
            <p>Copyright {this.state.date.getFullYear()}. RomilPolii </p>
          </div>
        </div>          
      </div>
    );
  }
}

export default Footer;