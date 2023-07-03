import React, { useEffect, useState } from 'react';
import { getAddresses, deleteAddress } from '../../utilities/AddressService';
import { useNavigate } from 'react-router-dom';

const ListAddressComponent = () => {
  const [addresses, setAddresses] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAddresses()
      .then((res) => {
        console.log('res in list address', res);
        setAddresses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteAddress = (id) => {
    deleteAddress(id)
      .then((res) => {
        setAddresses((prevAddresses) =>
          prevAddresses.filter((address) => address.id !== id)
        );
      });
  };

  const editAddress = (id) => {
    navigate(`/addresses?edit=${id}`);
  };

  const viewAddress = (id) => {
    navigate(`/addresses?view=${id}`);
  };

  const addAddress = () => {
    navigate('/add-address');
  };

  return (
    <div>
      <h2 className="text-center">Address List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addAddress}>
          Add Address
        </button>
      </div>
      <div className="row">
        {Array.isArray(addresses) && addresses.length > 0 ? (
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
              {addresses.map((address) => (
                <tr key={address.id}>
                  <td>{address.street}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>{address.zip}</td>
                  <td>
                    <button
                      onClick={() => editAddress(address.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      className="btn btn-danger"
                      style={{ marginLeft: '10px' }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => viewAddress(address.id)}
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
        ) : (
          <div>No addresses found.</div>
        )}
      </div>
    </div>
  );
};

export default ListAddressComponent;
