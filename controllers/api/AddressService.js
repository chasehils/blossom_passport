const Address = require('../../models/address');

exports.getAddresses = async function (req, res) {
  try {
    // Retrieve all addresses from the database
    const addresses = await Address.find({});
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve addresses' });
  }
};

exports.createAddress = async function (req, res) {
  try {
    const addressData = req.body;
    // Create a new address using the addressData
    const address = await Address.create(addressData);
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create address' });
  }
};

exports.getAddressById = async function (req, res) {
  try {
    const addressId = req.params.addressId;
    // Find the address by its ID in the database
    const address = await Address.findById(addressId);
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.json(address);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve address' });
  }
};

exports.updateAddress = async function (req, res) {
  try {
    const addressId = req.params.addressId;
    const updatedAddressData = req.body;
    // Find the address by its ID in the database and update it with the new data
    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      updatedAddressData,
      { new: true }
    );
    if (!updatedAddress) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.json(updatedAddress);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update address' });
  }
};

exports.deleteAddress = async function (req, res) {
  try {
    const addressId = req.params.addressId;
    // Find the address by its ID in the database and remove it
    const deletedAddress = await Address.findByIdAndRemove(addressId);
    if (!deletedAddress) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete address' });
  }
};
