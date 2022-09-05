import React from 'react'
import Header from './Header'

export default function Library() {
    return(
        <div>
          <Header title="Library" />
          <div className="container-fluid h-100 text-dark bg-light d-block" style={{
      
          }}>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">My-Books</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Dues</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Fines</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Return book</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Lost Book?</button>
          </div>
          <div className="row justify-content-center">
            <button className="col-6 col-md-3 btn btn-info m-2 text-light">Apply for No-due Certificate</button>
          </div>
          </div>
        </div>
    );
}