import React, { Component } from 'react';
import {
  createAddress,
  deleteAddress,
  getAddressById,
  getAddresses,
  updateAddress,
} from '../../utilities/AddressService';


class CreateAddressComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: this.props.match.params.id,
      street: '',
      city: '',
      state: '',
      zip: '',
    };

    this.changeStreetHandler = this.changeStreetHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changeZipHandler = this.changeZipHandler.bind(this);
    this.saveOrUpdateAddress = this.saveOrUpdateAddress.bind(this);
    this.cancel = this.cancel.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  // componentDidMount() {
  //   if (this.state.id !== '_add') {
  //     getAddressById(this.state.id).then((res) => {
  //       let address = res.data;
  //       this.setState({
  //         street: address.street,
  //         city: address.city,
  //         state: address.state,
  //         zip: address.zip,
  //       });
  //     });
  //   }
  // }
  

  saveOrUpdateAddress(e) {
    e.preventDefault();
    let address = {
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };

    // if (this.state.id === '_add') {
    //   AddressService.createAddress(address).then((res) => {
    //     this.props.history.push('/addresses');
    //   });
    // } else {
    //   AddressService.updateAddress(address, this.state.id).then((res) => {
    //     this.props.history.push('/addresses');
    //   });
    // }
  }

  changeStreetHandler(event) {
    this.setState({ street: event.target.value });
  }

  changeCityHandler(event) {
    this.setState({ city: event.target.value });
  }

  changeStateHandler(event) {
    this.setState({ state: event.target.value });
  }

  changeZipHandler(event) {
    this.setState({ zip: event.target.value });
  }

  cancel() {
    this.props.history.push('/addresses');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Address</h3>;
    } else {
      return <h3 className="text-center">Update Address</h3>;
    }
  }

  render() {
    return (
     
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form onSubmit>
                  <div className="form-group">
                    <label>Street:</label>
                    <input
                      placeholder="Street"
                      name="street"
                      className="form-control"
                      value={this.state.street}
                      onChange={this.changeStreetHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>City:</label>
                    <input
                      placeholder="City"
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changeCityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>State:</label>
                    <input
                      placeholder="State"
                      name="state"
                      className="form-control"
                      value={this.state.state}
                      onChange={this.changeStateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>ZIP:</label>
                    <input
                      placeholder="ZIP"
                      name="zip"
                      className="form-control"
                      value={this.state.zip}
                      onChange={this.changeZipHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateAddress}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default CreateAddressComponent;