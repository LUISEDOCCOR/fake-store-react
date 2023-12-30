import Header from "./assets/components/Header"
import Products from "./assets/components/Products"
import Comments from "./assets/components/Comments"
import Footer from "./assets/components/Footer"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Products/>
        <Comments/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
