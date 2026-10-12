import React from 'react'
import Imagess from "./image/slider.png"
import "./muthu.css"
import image1 from "./image/image1.jpeg"
import image2 from "./image/image2.jpeg"
import image3 from "./image/image3.jpeg"
const muthu = () => {

  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <img src="https://mec.edu.in/storage/2021/02/main-logo.png.webp" alt="logo" className='top'></img>
        <span>
          <div style={{fontSize:'20px'}}>
          <h2 style={{color:'#A73508'}}>For Admissions</h2>
          <p style={{color:'#222163'}}>94422 26737 | 94433 48637</p>
          </div>
          <div style={{color:'#222163',fontSize:'20px',margin:' 10px 10px 0px 30px'}}><p>TNEA</p><p>Code</p> </div>
           <p className='line'></p>
           <span style={{color:'#A73508',fontSize:'40px'}}>2610</span>
        </span>
        </div>
        <div>
        <img src={Imagess} style={{position:'absolute',height:'1150px',width:'1250px'
        }}></img>
        <div style={{display:'flex',justifyContent:'space-between',position:'relative'}}>
        <h1 className='learn'>LEARN & DISCOVER.</h1>
        <div className='box'>
            <h1 style={{color:'#31339C'}}>Online Admission Enquiry - 2026</h1><br></br>
            <div style={{height:'60px',width:'200px',border:'1px solid rgb(188, 184, 184)',borderRadius:'12px',background:' rgb(227, 225, 225)'}}><span><input type='checkbox' style={{height:'20px',width:'20px',margin:'10px 0px 10px 20px'}}></input><p style={{margin:'10px 80px 10px 0px'}}>Success</p></span></div><br></br>
            <span>
              <div>
                <label>Name</label><br></br>
                <input type="text" placeholder='Name'/><br></br>
              </div>
            <div>
            <label>Father Name</label><br></br>
            <input type="text" placeholder=' Father Name'/><br></br>
            </div>
            </span>
            <span>
            <div>
            <label>Date of Birth</label><br></br>
            <input type="Date" /><br></br>
            </div>
            <div>
            <label>Gender</label><br></br>
            <select>
              <option value="apple">Select</option>
              <option value="banana">Male</option>
              <option value="orange">Female</option>
            </select><br></br>
            </div>
            </span>
            <span>
            <div>
            <label>Register Number [+2 / Diploma / UG]</label><br></br>
            <input type="number" placeholder='Register Number'/><br></br>
            </div>
            <div>
            <label>Email</label><br></br>
            <input type="email" placeholder='Email Id'/><br></br>
            </div>
            </span>
            <span>
            <div>
            <label>Mobile Number</label><br></br>
            <input type="number" placeholder='Mobile Number'/><br></br>
            </div>
            <div>
            <label>Parent Mobile Number</label><br></br>
            <input type="number" placeholder='Parent Mobile Number'/><br></br></div>
            </span>
            <span>
            <div>
            <label>community</label><br></br>
            <select>
              <option value="apple">Select</option>
              <option value="banana">OC</option>
              <option value="orange">BC</option>
              <option value="apple">BCM</option>
              <option value="banana">MBC</option>
              <option value="orange">SC</option>
              <option value="apple">ST</option>
              <option value="banana">SCA</option>
              <option value="orange">Other</option>
            </select><br></br>
            </div>
            <div>
              <label>First graduate</label><br></br>
            <select>
              <option value="apple">Select</option>
              <option value="banana">Yes</option>
              <option value="orange">No</option>
            </select><br></br>
            </div>
            </span>
            <span>
            <div>
            <label>Address</label><br></br>
            <input type="text" placeholder='Address'/><br></br>
            </div>
            <div>
            <label>City / Town</label><br></br>
            <input type="text" placeholder='City / Town'/><br></br></div>
            </span>
            <span>
            <div>
            <label>District</label><br></br>
            <input type="text" placeholder='District'/><br></br>
            </div>
            <div>
            <label>state</label><br></br>
            <select>
              <option>Select</option>  
              <option>Salem</option>  
              <option>Namakkal</option>  
            </select><br></br>
            </div>
            </span><span>
            <div>
            <label>course</label><br></br>
            <select>
              <option>Select</option>  
              <option>AI & DS</option>  
              <option>IT</option>  
              <option>CSE</option>  
            </select><br></br>
            </div></span>
            <span>
            <div>
            <label>referred by</label><br></br>
            <input type="text" placeholder='Name & Mobile No.'/><br></br>
            </div></span>
            <button>Apply</button><br></br>
        </div>
        </div>
        </div>

        {/* second one shop*/}

        
    </div>
  )
}

export default muthu