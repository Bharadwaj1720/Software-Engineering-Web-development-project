import React from 'react'
import { Link } from 'react-router-dom';

export default function Buttons(props){
    return(
        <div>
            <div className="row justify-content-center">
              <Link className="col-6 col-md-3 btn btn-info m-2 text-light" to={props.path}>{props.title}</Link>
            </div>
        </div>
    );
}