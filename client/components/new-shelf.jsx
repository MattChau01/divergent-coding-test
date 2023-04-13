import React from 'react';

export default class NewShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoneId: '',
      shelfName: ''
    };
    this.zoneInput = this.zoneInput.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  zoneInput(event) {
    this.setState({
      zoneId: event.target.value
    });
  }

  nameInput(event) {
    this.setState({
      shelfName: event.target.value
    });
  }

  onSubmit(event) {

    if (this.state.zoneId === '' || this.state.shelfName === '') {
      event.preventDefault();
      return null;
    } else {
      event.preventDefault();

      const reqObj = {};
      reqObj.num = Number(this.state.zoneId);
      reqObj.name = String(this.state.shelfName);

      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqObj)
      };

      fetch('/api/shelves', req)
        .then(res => res.json())
        .then(data => {

          this.setState({
            zoneId: '',
            shelfName: ''
          });

          this.props.fetchShelves();
          this.props.closeSF();

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

              <h4>Enter a new shelf below: </h4>
              <h6>Each warehouse can only hold <span style={{ color: 'red' }}>TEN shelves MAX</span></h6>

              <div className='row justify-content-center'>
                <label htmlFor='zoneId' >ZoneId: &nbsp;
                  <input type='text' id='zoneId' name='zoneId' placeholder={this.state.zoneId} onChange={this.zoneInput} />
                </label>
              </div>

              <div className='row justify-content-center'>
                <label htmlFor='shelfName' >Shelf Name: &nbsp;
                  <input type='text' id='shelfName' name='shelfName' placeholder={this.state.shelfName} onChange={this.nameInput} />
                </label>
              </div>

              <div className='row justify-content-center mt-3'>
                <button style={{ cursor: 'pointer' }}>Submit</button>
              </div>

            </form>

            <button className='mt-3' onClick={this.props.closeSF} >close</button>

          </div>
        </div>
      </div>

    );
  }

}
