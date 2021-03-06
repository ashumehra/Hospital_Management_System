import React from 'react';
import {Link} from 'react-router-dom'
import medanta_logo from '../../src/assets/img/medanta-logo.png';
import {logo_url} from './Shared/Config'

const Navbar=({issearch,name,id,onchange})=>{
    return (
        <div>
  <nav className="navbar navbar-expand-sm bg-white navbar-light my-2">
    <div className="col-lg-2 col-md-2 col-sm-12 ">
      <Link to="/dashboard" className="navbar-brand" ><img src={logo_url} height="45px"/></Link>
    </div>
    { issearch && <div className="col-lg-10 col-md-10 col-sm-12 bg-white">
      <form className="form-inline">
        Search patients: <input className="form-control  ml-3 mr-3" type="text" placeholder="Patient Name" value={name} onChange={(e)=>{onchange(e,"name")}}/>
        Or <input className="form-control  ml-3 mr-3 " type="text" placeholder="Patient Id" value={id} onChange={(e)=>{onchange(e,"id")}} />
        
      </form>
    </div> }
     </nav> 
  <hr className="mx-0 my-0" />
</div>


    )
}


export default Navbar;
