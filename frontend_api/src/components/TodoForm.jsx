import React, {  useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const TodoForm = () => {

    const [todo, setTodo] = useState()
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [customerinput, setCustomerinput] = useState('')
    const [customer, setCustomer] = useState()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [status, setStatus] = useState([])

    const baseUrl = "https://localhost:7144/api/"

    function submitCustomer(e){
        e.preventDefault()
        setCustomer({
            firstName,
            lastName,
            email,
            phoneNumber
        })
    }
    function submitTodo(e){
        e.preventDefault()
        setTodo({
            subject,
            customerId : customerinput,
            description,
        })
    }

    useEffect(() => {
        if(!todo) return
        const addTodo = async () => {
            const res = await axios.post(baseUrl + "todos" , todo)
        }
        addTodo()
    }, [todo])

    useEffect(() => {
        if(!customer) return

        const addCustomer = async () => {
            const res = await axios.post(baseUrl + "customers" , customer)
        }
        addCustomer()
    }, [customer])
  


  return (
    <div className="container">
        <form onSubmit={submitTodo}>
            <div className="mb-3">
                <label className='form-label'> Ange Rubrik</label>
                <input type="text" id='title' className='form-control' value={subject} onChange={(e) => setSubject(e.target.value)}   />
            </div>
            <div className="mb-3">
                <label className='form-label'> Ange Kund</label>
                <input type="number" id='customer' className='form-control' value={customerinput} onChange={(e) => setCustomerinput(e.target.value)}   />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Ange Beskrivning</label>
                <textarea type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value )}></textarea>
            </div>
            <button type="submit" className="btn btn-success">Spara</button>
        </form>

        <form onSubmit={submitCustomer}>
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
            <button type="submit" className="btn btn-success">Spara</button>
        </form>
            <form onSubmit={setStatus}>
                <div className="mb-3">
                    <label className="form-label">Ange status</label>
                    <input type="text" className="form-control" value={status} onChange={setStatus} />
                    
                </div>
            </form>
    </div>
  )
}


export default TodoForm