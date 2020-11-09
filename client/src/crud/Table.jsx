import React,{Fragment,useEffect,useState} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"
import {Table,Button} from "react-bootstrap"
import UpdateComponent from "./Modal"
const TableComponent = ()=>{
	const [data,setData] = useState([])
  const [dataForUpdate,setDataForUpdate] = useState({})
  const [show,setShow] = useState(false)
  const handleShow = (index)=>{ 
    setShow(true)
    updateHandler(index)
  }
  const handleClose = ()=> setShow(false)

	useEffect(()=>{
       const data = async ()=>{
      try{
        let getData = await axios.get("http://localhost:9000/aliens")
       setData([...getData.data])
      }catch(err){
        console.log(err)
         throw err
       }
    }
    data()
	},[])
const deleteHandler = async (e,id)=>{
  e.preventDefault()
  await axios.delete(`http://localhost:9000/aliens/${id}`)
   let list = data.filter(alien=> alien._id !== id)
   setData([...list])
}


const updateHandler = (index)=>{
   let listItem = data[index]
	setDataForUpdate({...listItem})
}
  
  return(
   <Fragment>
   	<Table>
   	<thead>
   		<tr>
   		  <th>Name</th>
   		  <th>Tech</th>
   		  <th>Subcribe</th>
        <th></th>
   		</tr>
   	</thead>
   	<tbody>

        {data.map((data,index)=>(
          <tr key={[data.name,index].join()}>
   			<td>{data.name}</td>
   			<td>{data.tech}</td>
   			<td>{data.sub? "Subscibed" : "unSubscibed"}</td>
   			<td>
             <Button variant="danger" className="mr-2" onClick={e=>deleteHandler(e,data["_id"])}>
   			   Delete
             </Button>
             <Button onClick={(e)=>handleShow(index)}>
   			      Update
             </Button>
   			</td>
   		</tr>
        ))}
   	</tbody>
   	</Table>
    <UpdateComponent show={show} setShow={setShow} data={data} setData={setData} handleClose={handleClose} setDataForUpdate={setDataForUpdate} dataForUpdate={dataForUpdate}/>
   </Fragment>
  )
}

export default TableComponent