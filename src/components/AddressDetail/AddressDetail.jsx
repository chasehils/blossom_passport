import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getToken } from '../../utilities/users-service'

export default function AddressDetail() {
    const { addressId } = useParams()
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)
    const token = getToken()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/api/my_address/${addressId}`)
			.then((res) => res.json())
			.then((address) => setAddress(address))
			.catch((error) => setError(error.message))
    }, [])

    function handleChange(event) {
        setAddress(prevAddress => {
            return {
                ...prevAddress,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`/api/my_address/${address._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(address)
        })
            .then(res => res.json())
            .then(address => console.log('Address was changed', address))
            .catch(error => setError(error.message))
    }

    function handleDelete() {
        fetch(`/api/my_address/${address._id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => navigate('/my_address/new'))
            .catch(error => setError(error.message))
    }

    return (
			<div>
				<h2>Address Detail</h2>
				{address && <p>{address.text}</p>}
                <button onClick={handleDelete}>Remove Address</button>
				{error && <p>{error}</p>}
				<form onSubmit={handleSubmit}>
					<input type='text' name='text' onChange={handleChange} value={address?.text}/>
					<input type='submit' />
				</form>
			</div>
		)
}

