import React from 'react';

export default class NewWarehouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facilityName: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.userInput = this.userInput.bind(this);
  }

  userInput(event) {
    this.setState({
      facilityName: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.facilityName === '') {
      event.preventDefault();
      return null;
    } else {
      event.preventDefault();

      const reqObj = {};
      reqObj.facilityName = this.state.facilityName;

      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqObj)
      };

      fetch('/api/warehouseZones', req)
        .then(res => res.json)
        .then(data => {

          this.setState({
            facilityName: ''
          });

          this.props.fetchZones();
          this.props.closeWHForm();

        })
        .catch(err => console.error(err));

    }

  }

  render() {
    return (
      <div className='mt-3'>
        <div className='mt-3'>
          <div className='text-center'>

            <form style={{
              backgroundColor: 'lightGrey',
              height: '18rem'
            }} className='pt-5' onSubmit={this.onSubmit}>

              <h4 className='pt-5'>Enter a new facility below: </h4>
              <label htmlFor='facilityName' >Facility Name: &nbsp;
                <input type='text' id='facilityName' name='facilityName' placeholder={this.state.facilityName} onChange={this.userInput} />
              </label>
              <button style={{ cursor: 'pointer' }}>Submit</button>

            </form>

            <button className='mt-3' onClick={this.props.closeWHForm} >close</button>

          </div>
        </div>
      </div>
    );

  }

}
