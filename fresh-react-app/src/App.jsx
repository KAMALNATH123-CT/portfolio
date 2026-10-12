import React from 'react'
import Test from "./Test.jsx";
// import "./Test.css"
// import "./App.css"
import Dashboard from './Dashboard.jsx';
import Day4 from './Day4.jsx';
import Muthu from './muthu.jsx';
import Product from './product.jsx';
import Normal from './normal.jsx';
import Counter from './counter.jsx';
import {Routes,Route,Link} from 'react-router-dom'
// import Home from './task/home-task.jsx'
import Getdata from './getdata.jsx'
import Home from './task/home.jsx'

function App(){
  const value={id:1,Product:'Mobile',Price:17000}

  const Products=[{
        name:"Dragon ball t-shirt",
        price:"500",
        strikeprice:"899",
        image:"https://storeassets.im-cdn.com/media-manager/channapatnatoysin/oMkclONxQACrWv12tGxu_channapatna-montessori-toys-set-meeran-03_0x0_webp.jpg"
    },
    {
        name:"super dragon",
        price:"1000",
        strikeprice:"2500",
        image:"https://market99.com/cdn/shop/files/WW10006719.jpg?v=1769498165&width=1280"
    },
    {
        name:"spical edition",
        price:"2500",
        strikeprice:"2999",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDqSbnggd_inoWhuQ8qidYkDqTTysBozDD4_YlKAHvGSg3fy8i2wXpkA-&s=10"
    }]
  const Productss=[{
        name:"Men Road and Trail Superior Grip",
        price:"500",
        strikeprice:"899",
        image:"https://contents.mediadecathlon.com/p2819309/1bb66c433bc5012f4b5685049fdb0f4e/p2819309.jpg?format=auto&quality=70&f=124x0"
    },
    {
        name:"model jack",
        price:"1000",
        strikeprice:"2500",
        image:"https://contents.mediadecathlon.com/p2819317/fd6e5f22c1818bedd8b83910c3f79af6/p2819317.jpg?format=auto&quality=70&f=124x0"
    },
    {
        name:"spical shoe",
        price:"2500",
        strikeprice:"2999",
        image:"https://contents.mediadecathlon.com/p3105883/a75af12485f611b9a26abef42d54fc19/p3105883.jpg?format=auto&quality=70&f=124x0"
    }]

  return (
    <div className='App'>
      {/* <Test/>
      <Dashboard/>
      <Day4 data={value}/>
     */}
     {/* <Counter/> */}
     {/* <Getdata/> */}
     {/* <Home/> */}
        {/* <Link className='llas' to='/'>home</Link> 
        <Link className='llas' to='/normal'>normal</Link> 
        <Link className='llas' to="/product">product</Link>
        <Link className='llas' to="/muthu">Muthayammal</Link>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/normal" element={<Normal productObj={Productss}/>}/>
        <Route path='/product' element={<Product productObj={Products}/>}/>
        <Route path='/muthu' element={<Muthu/>}/>
      </Routes> */}



      {/* <Home/> */}
    </div>
  )
}
export default App