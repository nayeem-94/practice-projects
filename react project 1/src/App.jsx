

import './App.css'

function App() {

  const name = {
    name: "nazmul",
    roll: 101,
    class: 'ten'
  }

  return (
    <>
      <div className='text-center mt-10 text-9xl font-bold container mx-auto'>

        <div>name : <span className='text-red-600'>{name.name}</span></div>
        <div>roll : <span className='text-red-600'>{name.roll}</span></div>
        <div>class : <span className='text-yellow-600'>{name.class}</span></div>
      </div>
    </>

  )
}

export default App
