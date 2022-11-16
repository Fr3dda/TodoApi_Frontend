
import { useState } from 'react'

const StatusForm = () => {

    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const json = JSON.stringify({ status: e.target[0].value })
        const res = await fetch('https://todo-db.azurewebsites.net/api/Statuses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        console.log(await res.json())
        setStatus('')
    
    }

    const handleChange = (e) => {
        setStatus(e.target.value)
        console.log(e.target.value)
    }


  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label className="form-label">Ange status</label>
        <input type="text" className="form-control" value={status} onChange={handleChange} />
        
    </div>
    <button type="submit" className="btn btn-success">Spara</button>
</form>
  )
}

export default StatusForm