import React from 'react';

import User_img from '../../../src/assets/img/user.png';



const DoctorsRow=()=>{

  return (
     <li className="table-row" style={{borderLeft:"4px solid green"}}>
      <div className="col col-1">42235</div>
      <div className="col col-2"><img src={User_img} className="img-fluid rounded-circle mr-2" width="40px" alt="User"/>John Doe</div>
      <div className="col col-3" >$350</div>
      <div className="col col-4" >Pending</div>
      <div className="col col-5">Payment Status</div>
      <div className="col col-6">John Doe</div>
      <div className="col col-7" >$350</div>
      <div className="col col-8" ><i class="fa fa-chevron-right text-primary" aria-hidden="true"></i></div>
    </li>
  )
}
const DoctorsTable=()=>{

    return (
        <ul className="responsive-table pl-0" >
            <li className="table-header">
            <div className="col col-1">#</div>
            <div className="col col-2">Doctor Name</div>
            <div className="col col-3">Department</div>
            <div className="col col-4">Specialist</div>
            <div className="col col-5">Age</div>
            <div className="col col-6">Phone Number</div>
            <div className="col col-7">Appointments</div>
            <div className="col col-8"></div>
            </li>
    
        <DoctorsRow/>
        <DoctorsRow/>
        <DoctorsRow/>
        <DoctorsRow/>
        <DoctorsRow/>
       
    
        </ul>
    )
}

export default DoctorsTable;