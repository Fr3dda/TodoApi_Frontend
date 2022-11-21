
import { useEffect, useState} from "react"
import axios from "axios"


const baseUrl = "https://localhost:7144/api/"


const TodoView = () => {
    const [subject, setSubject] = useState('')
    const [todos, setTodos] = useState([])

    useEffect(() =>  {
        const addTodos = async () => {
          const res = await axios.get(baseUrl + "todos")
            setTodos(res.data)
        }
        addTodos()
    }, [])


  return (
    <div className='container'>
        {todos.map((todo) => (
            <div key={todo?.id}>
                <h2 >{todo?.subject}</h2>
                <p>{todo?.description}</p>

            </div>
        )) }
        
    </div>
  )
}

export default TodoView