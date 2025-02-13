import './App.css';

function App() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
        <div className="shrink-0">
          <img className="main_cover_photo" src="/main_cover.jpg" alt="Main Page Cover Picture Aron is Standing"/>
        </div>
      </div>
      <div className="app_container flex flex-row items-center justify-center">
        <div className='name_container flex flex-col items-center justify-center'>
          <div className='nickname_container'>
            <p className='nickname text-black font-yesmyoungjo'>Aron</p>
          </div>
          <div className='content_container'>
            <p className='content text-white font-yesmyoungjo'>Developing Portfolio</p>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
