import React, { useState } from 'react'

const CustomerForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const json = JSON.stringify({firstName, lastName, email, phoneNumber})

        const res = await fetch('https://todo-db.azurewebsites.net/api/Customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        console.log(await res.json())
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
    }


  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label className="form-label">Ange Förnamn</label>
        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className="mb-3">
        <label className="form-label">Ange Efternamn</label>
        <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div className="mb-3">
        <label className="form-label">Ange E-postadress</label>
        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-3">
        <label className="form-label">Ange Telefonnummer</label>
        <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </div>
    {/* (e) => setLastName(e.target.value) */}
    <button type="submit" className="btn btn-success">Spara</button>
</form>
  )
}

export default CustomerForm