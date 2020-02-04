import React from "react"
import {useState} from "react"
import axios from "axios"

const GitAPI = () => {

    const URL = "https://api.github.com/users/5935512036"
    
    const [data , setData] = useState(" ")

    const FetchUser = async () => {
        axios.get(`${URL}`)
            .then(responce => {
                const user= {
                    name: responce.data.name,
                    id: responce.data.login,
                }
                SetData(user)
        })
    }

    const SetData = (value) => {
        setData(value)
    }
 
    const {name , id } = data

    return (
      
            <div>
            <div className="row">
                 <div className="col">
                  รหัสลูกค้า : {id}
                 </div>
              <div className="col">
                   ชื่อ :{name}
             </div>
             <div className="col">
                  <button type="button" class="btn btn-info" onClick={FetchUser}>แสดงข้อมูล</button>
             </div>
            </div>
            
</div>
    )
}



export default GitAPI;