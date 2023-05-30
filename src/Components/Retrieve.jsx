import React, { useState } from 'react'
import './set.css'
import { useSelector } from 'react-redux'

const Retrieve = () => {
    const alldata = useSelector(Storedata=>Storedata)
    console.log(alldata.sendata);
    const [adhaarno, setadhaarno] = useState(null)
    const [firstdata, setfirstdata] = useState([])

    const finddata =()=>{
      let resdata = alldata.add_data.find((ele)=>{
                  return ele.adhar === adhaarno
      })
       setfirstdata([resdata])
    }
  return (
    <div className='sethead'>
    <p className='paragr'>Retrieve Information</p>
    <div className='resultbox'>
        <input type="text" onChange={(e)=>setadhaarno(e.target.value)}/><button onClick={finddata}>Find</button>
        {firstdata.map((ele)=>{
            return <tr>
            <td>{ele.name}</td>
            <td>{ele.date}</td>
            <td>{ele.number}</td>
            <td>{ele.adhar}</td>
            <td>{ele.age}</td>
          </tr>
        })}
    </div>
   </div>
  )
}

export default Retrieve