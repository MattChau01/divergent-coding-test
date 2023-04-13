import React from 'react';
import WarehouseList from './warehouse-list';
import NewWarehouse from './new-warehouse';
import ShelvesList from './shelves-list';
import NewShelf from './new-shelf';

export default class Warehouses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouseZones: [],
      shelves: [],
      isLoading: true,
      warehouseButton: false,
      shelfButton: false
    };
    this.addWarehouse = this.addWarehouse.bind(this);
    this.closeWHForm = this.closeWHForm.bind(this);
    this.fetchZones = this.fetchZones.bind(this);
    this.fetchShelves = this.fetchShelves.bind(this);
    this.addShelf = this.addShelf.bind(this);
    this.closeSF = this.closeSF.bind(this);
  }

  componentDidMount() {

    this.fetchZones();
    this.fetchShelves();

  }

  fetchZones() {
    fetch('/api/warehouseZones/get')
      .then(res => res.json())
      .then(data => {
        this.setState({
          warehouseZones: data,
          isLoading: false
        });
      });
  }

  fetchShelves() {
    fetch('/api/shelves/getAll')
      .then(res => res.json())
      .then(data => {
        this.setState({
          shelves: data
        });
      });
  }

  addWarehouse() {
    this.setState({
      warehouseButton: true
    });
  }

  closeWHForm() {
    this.setState({
      warehouseButton: false
    });
  }

  addShelf() {
    this.setState({
      shelfButton: true
    });
  }

  closeSF() {
    this.setState({
      shelfButton: false
    });
  }

  render() {
    return (
      <div>

        <div className='d-flex justify-content-center'>
          <h4 className='text-center mt-5'>
            LIST OF WAREHOUSES
          </h4>
        </div>

        <div>
          <div className='d-flex mt-5'>

            <div className='col'>
              <h1>
                {(this.state.isLoading)
                  ? <p>Loading...</p>
                  : <WarehouseList zones={this.state.warehouseZones} />}
              </h1>
            </div>

            <div className='col'>

              {(this.state.warehouseButton === true)
                ? <NewWarehouse closeWHForm={this.closeWHForm} fetchZones={this.fetchZones} />
                : null}

              {(this.state.shelfButton === true)
                ? <NewShelf closeSF={this.closeSF} fetchShelves={this.fetchShelves} />
                : null}
            </div>

          </div>
        </div>

        <div>

          <div className='d-flex justify-content-center row'>
            <button onClick={this.addWarehouse}>
              + Add a new warehouse
            </button>
            <button onClick={this.addShelf}>
              + Add a new shelf
            </button>
          </div>
        </div>

        <div>
          <h4 className='text-center mt-5'>
            LIST OF SHELVES
          </h4>
        </div>

        <div className='d-flex flex-column justify-content-center'>
          <div className='text-center'>
            Zone ID &nbsp; Shelf Name
          </div>
          <div>
            {(this.state.isLoading)
              ? <p>Loading...</p>
              : <ShelvesList shelves={this.state.shelves} />}
          </div>
        </div>
      </div>
    );
  }
}
