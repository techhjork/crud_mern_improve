import React,{Fragment,useState} from "react"
import {Modal,Form,Button} from "react-bootstrap"
import axios from "axios"

const UpdateComponent = ({setData,data,handleClose,setShow,show,updateHandler,dataForUpdate,setDataForUpdate})=>{
  // console.log(dataForUpdate)
  const inputHandler= (e)=>{
     let data = e.target.value
     setDataForUpdate((prevValue)=>({...prevValue,name:data}) )
     // console.log(dataForUpdate)
  }
  const submitUpdate= async (e)=>{
     e.preventDefault()
     let itemId = data.findIndex(item=> item._id === dataForUpdate._id)
     data[itemId] = dataForUpdate
     setData(data)
     await axios.patch(`http://localhost:9000/aliens/${dataForUpdate._id}`,dataForUpdate)
     
     handleClose()
  }
	return(
   <Fragment>
     
     
       <Modal show={show} onHide={handleClose} backdrop="static" keyboard="false">
       <Modal.Header closeButton>
         <Modal.Title>
           Title
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <Form onSubmit={(e)=>submitUpdate(e)}>
         <Form.Group>
          <Form.Label className="h4">Name</Form.Label>
            <Form.Control type="text" name="name" value={dataForUpdate.name} onChange={(e)=> inputHandler(e)} placeholder="Enter Name"  />
          </Form.Group>        
          <Button type="submit" className="text-center d-block w-100 h3">Update</Button>
        </Form>
       </Modal.Body>
       </Modal>
   </Fragment>
	)
}

export default UpdateComponent