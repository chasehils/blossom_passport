const Address = require('../../models/addressform')

function index(req, res) {
    Address.find({ user: req.user._id })
        .then(addresses => res.json(addresses))
        .catch(error => res.json(error))
}

function show(req, res) {
    Address.findById(req.params.id)
        .then(address => {
            if (!address) throw new Error('No document is found matching that id')
            return note
        })
        .then(address => res.json(address))
        .catch(error => res.json(error))
}

function create(req, res) {
    req.body.user = req.user._id
    console.log(req.body)
    Note.create(req.body)
        .then(address => res.json(address))
        .catch(error => res.json(error))
}

function update(req, res) {
    Address.findById(req.params.id)
        .then(address => {
            if (!address) throw new Error('No document is found matching that id')
            return address
        })
        .then(address => {
            address.text = req.body.text
            return address.save()
        })
        .then(address => res.json(address))
        .catch(error => res.json(error))
}

function addressDelete(req, res) {
    Address.findById(req.params.id)
        .then(address => {
            if (!address) throw new Error('No document is found matching that id')
            return address
        })
        .then(note => {
            return address.deleteOne()
        })
        .then(() => res.json('Address removed'))
        .catch(error => res.json(error))
}

module.exports = {
    index,
    show,
    create,
    update,
    addressDelete
}