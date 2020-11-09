import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import FormComponenet from "./crud/Form"
import "bootstrap/dist/css/bootstrap.css"
import {Container} from "react-bootstrap"
import Table from "./crud/Table"
import UpdateComponent from "./crud/Modal"


const App = ()=>{
	return(
	<Container className="mt-3 border p-3">
   		<Router>
	     	<Switch>	         
           <Route path="/aliens">
           	   <Table/>
           </Route>
           <Route path="/">
             <FormComponenet />
           </Route>
        </Switch>
       </Router>
     </Container>
	)
}
export default App;