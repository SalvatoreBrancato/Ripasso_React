import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [user, setUser] = useState([
    {
      id: 1,
      nome: 'Salvo',
      cognome: 'Brancato',
      img:'https://media.istockphoto.com/id/1364745576/it/foto/vista-aerea-della-fontana-di-pretoria-a-palermo-sicilia-italia.jpg?s=2048x2048&w=is&k=20&c=lusCxeIxZau5BbMiACnU2PACNIS_PoZWFZ1VCN5GKBw=',
      visibility: true
    }
  ])

  // prova commmit

  const [formData, setFormData] = useState({
    id:'',
    nome: '',
    cognome: '',
    img: '',
    visibility: false
  })


  function decreaseClick(){
    setCount(count-1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      id: Math.floor(Math.random() * 100),
      nome: formData.nome,
      cognome: formData.cognome,
      img:formData.img,
      visibility: formData.visibility
    }

    setUser([...user, newUser])
  }

  const handleInputChange = (e) => {
    const {name, type, value, checked} = e.target
    const inputValue = type == 'checkbox' ? checked : value
    setFormData({
      ...formData,
      [name]: inputValue
    })
  }

  return (
    <>
      <div>Il Count é: {count}</div>
      <button className='rounded-l-lg bg-blue-400 p-1 text-white' onClick={()=>setCount(count + 1)}>Aumenta</button>
      <button className='rounded-r-lg bg-blue-400 p-1 text-white' onClick={decreaseClick}>Diminuisci</button>

    <form className="flex justify-center items-center w-screen" onSubmit={handleSubmit}>
      <div className='flex flex-col p-3 bg-slate-500 rounded w-1/3 my-3'>
        <div className='flex flex-col'>
          <label htmlFor="nome">Inserisci nome</label>
          <input type="text" name='nome' value={formData.nome} onChange={handleInputChange}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">Inserisci Cognome</label>
          <input type="text" name='cognome' value={formData.cognome} onChange={handleInputChange}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="img">Inserisci URL immagine</label>
          <input type="text" name='img' value={formData.img} onChange={handleInputChange}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">Visibilie?</label>
          <input type="checkbox" name='visibility' checked={formData.visibility} onChange={handleInputChange}/>
        </div>
        <button className='bg-slate-50' type='submit'>Invia</button>
      </div>
    </form>
    <div className='flex flex-wrap'>
      {user.map((elem)=>{
        return(
          <div className='w-1/3 bg-slate-700' key={elem.id}>
            <img src={elem.img} alt="" />
            <div className='text-white'>{elem.nome}</div>
            <div className='text-white'>{elem.cognome}</div>
            <div className='text-white'>{elem.visibility ? 'visibile': 'non visibile'}</div>        
          </div>
        )
      })}
    </div>

    </>
  )
}

export default App
