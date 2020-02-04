import React, { useState } from 'react';
import '../App.css'; 

const Productcard = props => {

    const { imgeURL , name, infomation , price } = props.product
    const [count , setCount] = useState(1) ;
   
    return (


        <div >
            <h3>{name}</h3>
            <img src = {imgeURL}  className="img-responsive" alt="Cinque Terre" width="370" height="350"/>

            <div className='bnt'>
                <spen>{price} บาท </spen>
                <button onClick={() => {setCount(count+1)}}>เพิ่ม</button>
                <spen>{count}</spen>
                <button onClick={() => {setCount(count-1)}}>ลด</button>
            </div>
            <p>{infomation}</p>              
        </div>
        





    )

}

export default Productcard;