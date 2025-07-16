import UserImage from './assets/T&T.png'
import CactusImage2 from './assets/cactus2.svg'
import './App.css'
function App() {

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-6 py-10 gap-6 bg-orange-50">
      <div className="flex flex-col items-center gap-4 w-full">
        <img
          src={CactusImage2}
          className="w-1/2 max-h-[25vh] object-contain"
          alt="Cactus Image Colored"
        />
        <div className="flex flex-col justify-center items-center w-full max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
            Ted & Tina Essig
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-bold mt-4">
            Please Stay In Touch! We Love connecting to our brothers and sisters around the world
          </p>
        </div>
      </div>

      <img
        src={UserImage}
        className="w-full object-cover rounded-lg"
        alt="User Image"
      />
    </div>
  )
}

export default App
