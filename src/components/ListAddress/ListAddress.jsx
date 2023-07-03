import React, { Component } from 'react';
import AddressService from '../../utilities/AddressService';

class ListAddressComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addresses: [],
    };

    this.deleteAddress = this.deleteAddress.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.viewAddress = this.viewAddress.bind(this);
    this.addAddress = this.addAddress.bind(this);
  }

  componentDidMount() {
    AddressService.getAddresses()
      .then((res) => {
        console.log(res.data); // Add this line to check the value
        this.setState({ addresses: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteAddress(id) {
    AddressService.deleteAddress(id).then((res) => {
      this.setState({
        addresses: this.state.addresses.filter(
          (address) => address.id !== id
        ),
      });
    });
  }

  editAddress(id) {
    this.props.history.push(`/edit-address/${id}`);
  }

  viewAddress(id) {
    this.props.history.push(`/view-address/${id}`);
  }

  addAddress() {
    this.props.history.push('/add-address');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Address List</h2>
        <div className="row">
          <button
            className="btn btn-primary"
            onClick={this.addAddress}
          >
            Add Address
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>ZIP</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.addresses.map((address) => (
                <tr key={address.id}>
                  <td>{address.street}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>{address.zip}</td>
                  <td>
                    <button
                      onClick={() => this.editAddress(address.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteAddress(address.id)}
                      className="btn btn-danger"
                      style={{ marginLeft: '10px' }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewAddress(address.id)}
                      className="btn btn-info"
                      style={{ marginLeft: '10px' }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAddressComponent;