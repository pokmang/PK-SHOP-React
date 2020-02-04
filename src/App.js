import React from 'react';
import Tb from './components/tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/title';
import Productcard from './components/product';
import GitAPI from "./components/gitAPI";
import './App.css';



const products =  [
  {
    name :'เครื่องตัดหญ้า' ,
    imgeURL : 'https://www.homemegamart.com/wp-content/uploads/2018/12/ITM0038919.jpg' ,
    infomation : 'เครื่องยนต์ดีเซล ประหยัดน้ำมัน  ทนต่อความร้อน' ,
  
    price : '2,900.00'
  
  },
  {
    name :'เครื่องบ่นยา' ,
    imgeURL : 'https://inwfile.com/s-gf/hsjvwk.png' ,
    infomation : 'รองรับ 20 ลิตร ประหยัดเชื้อเพลิง ประกัน 5 ปี ' ,
  
    price : '1,799.00'
  
  },
  {
    name :'พลั่ว' ,
    imgeURL : 'https://sc02.alicdn.com/kf/UTB8OCvBsVfFXKJk43Otq6xIPFXax/Made-in-Japanese-brand-elephant-shovels-spades.jpg_350x350.jpg' ,
    infomation : 'ใช้สำหรับงานการเกษตร  ราคาถูก ' ,
    price : '299.00'
  
  }

]



const App =()=> {
  return (
   <div>
     
     <Tb />
     <GitAPI />
     <Title />
         <div className='con'>
              {
                  products.map((item, index) => {
                      return(<Productcard key ={index} product={item}/>)
                   })
              }
          </div>
     
     
   </div>
   
   );
  }

export default App;
