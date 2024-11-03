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

    const Products= [
      { name: "1 Plus Phone", price: 55000 },
      { name: "Samsung Galaxy", price: 6500 },
      { name: "iPhone", price: 75000 },
    ];

  return (
    <>
   <Navbar/>
   <ProductList productList = {productList}  />

    <div>
      <h1>Products List </h1>
      <ul>
        {Products.map((product,index)=>(
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>

   {/* <Footer/> */}
    </>

  );
}

export default App;
