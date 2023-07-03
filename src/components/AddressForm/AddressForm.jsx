import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getToken } from '../../utilities/users-service'

export default function AddressesPage({ user }) {
    const [addresses, setAddresses] = useState(null)
    const [error, setError] = useState(null)
    const [address, setAddress] = useState('')
    const token = getToken()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/api/my_address', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(addressesJSON => setAddresses(addressesJSON))
            .catch(errorResponse => setError(errorResponse))
    }, [])

    const addressesJSX = addresses?.map((address) => (
			<li key={address._id}>
				<Link to={`/my_address/${address._id}`}>{address.text}</Link>
			</li>
		))
    
    function handleChange(event) {
        setAddress(prevAddress => {
            return {
                ...prevAddress,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
      console.log('right before event.preventDefault')
        event.preventDefault()
        fetch('/api/my_address', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(address)
        })
            .then(res => res.json())
            .then(note => navigate(`/my_address/${address._id}`))
            .catch(error => setError(error.message))
    }

    return (
        <div>
        <h2>Address Page</h2>
        {error && <p>There was an error: {error.message}</p>}
        {addresses && addressesJSX}
        <form onSubmit={handleSubmit}>
            <input type='text' name='text' onChange={handleChange}/>
            <input type='submit' />
        </form>
        </div>
    )
}