import logo from './logo.svg';
import './App.css';
import Navbar from './componet/Navbar'; 
import ProductList from './componet/ProductList';


function App() {

    const productList = [
      {
        price : 9999,
        name:"Iphone 105 Max",
        quantity : 3,
      },
      {
        price : 9199,
        name:"Iphone 105 Max",
        quantity : 4,
      }

    ]


  return (
    <>
   <Navbar/>
   <ProductList productList = {productList}  />
   {/* <Footer/> */}
    </>

  );
}

export default App;
