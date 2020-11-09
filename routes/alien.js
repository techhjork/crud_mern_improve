const express = require("express")
const router = express.Router()
const Alien = require("../models/alien")

router.get("/", async (req,res)=>{
	console.log("ds")
    try{
      const aliens = await Alien.find()
      res.json(aliens)
    } catch(err){
       console.log("Error" + err)
    }
})

router.post("/",async (req,res)=>{
	console.log("POST")
	const {name,tech,sub} = req.body
	console.log(name,tech,sub,req.body)
    const insert = await Alien({name,tech,sub})
	try{
     const data = await insert.save()
     res.json(data)
	}catch(err){
		console.log("Error" + err)
	}
})

router.get("/:id",async (req,res)=>{ 
	try{
	 const alien = await Alien.findById(req.params.id)
     console.log(alien)
     res.json(alien)
	}catch(err){
		console.log("Error"+err)
	}	
})


router.patch("/:id",async (req,res)=>{ 
	try{
	 let alien = await Alien.findById(req.params.id)
     alien.sub = req.body.sub
     alien.name = req.body.name
     console.log(alien)
     const a1 = await alien.save()
     res.json(a1)
	}catch(err){
		console.log("Error"+err)
	}	
})

router.delete("/:id",async (req,res)=>{ 
	try{
	 let alien = await Alien.findById(req.params.id)
       
     const a1 = await alien.deleteOne(alien)
     res.json(a1)
	}catch(err){
		console.log("Error"+err)
	}	
})


module.exports =  router