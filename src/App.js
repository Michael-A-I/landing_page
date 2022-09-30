import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
import Testimonial from "./components/Testimonial/Testimonial"
import CallAction from "./components/CallAction/CallAction"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Hero />
      <Information />
      <Testimonial />
      <CallAction />
      <Footer />
    </div>
  )
}

export default App
