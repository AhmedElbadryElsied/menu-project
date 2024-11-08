import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Categorys from "./components/Categorys";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { useState } from "react";


function App() {

  const [data, setData] = useState(items);


// get All categorys
  const allCategory= ["الكل",...new Set(items.map((ele)=>ele.category))];


  // filter by category
  const filterByCategorys=(cat)=>{
    if(cat === "الكل"){
      setData(items)
    }else{
      const newArray=items.filter((ele)=>ele.category === cat)
      setData(newArray);
    }
  }


  // filter by category search
  const filterByCategorysSearch=(ward)=>{
    if(ward === ""){
      setData(items)
    }else{
      const newArray=items.filter((ele)=>ele.title === ward)
      setData(newArray);
    }
  }


  return (
    <div className="">
      <NavBar filterByCategorysSearch={filterByCategorysSearch}/>
      <Container>
      <Header/>
      <Categorys filterByCategorys={filterByCategorys} allCategory={allCategory}/>
      <ItemsList itemsData={data}/>
        
      </Container>
    </div>
    
  );
}

export default App;
