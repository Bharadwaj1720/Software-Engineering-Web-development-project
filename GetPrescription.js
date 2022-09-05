import React from 'react'
import Header from './Header'

export default function GetPrescription() {
    return (
        <div>
            <Header title="Get a Prescription" />
            <div className="details">
                <span className='border p-2' style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className="detail-header-name">Name</div>
                    <input className="name-bar" type="text" placeholder="Enter your Name"></input>     
                </span>
                <span className='border p-2' style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className="detail-header-age">Age</div>
                    <input className="age-bar" type="text" placeholder="Enter your Age"></input>     
                </span>
                <span className='border p-2'>
                    <span className="detail-header" style={{
                        width: 60
                    }}>Gender</span>
                    <select class="form-select" aria-label="Default select example" style={{
                        width: 300,
                        display: 'inline-block'
                    }}>
                        <option selected>Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>    
                </span>
                <span className='border p-2'>
                    <span className="detail-header" style={{
                        width: 60
                    }}>Doctor</span>
                    <select class="form-select" aria-label="Default select example" style={{
                        width: 300,
                        display: 'inline-block'
                    }}>
                        <option selected>Select</option>
                        <option value="1">Doctor1</option>
                        <option value="2">Doctor2</option>
                    </select>    
                </span>
                <span className='border p-2' style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className="detail-header-symptoms">Symptoms first observed on</div>
                    <input className="symptoms-bar" type="text" placeholder="Enter the date"></input>     
                </span>
                <span className='border p-2'>
                    <div className="d-flex align-items-center">
                        <span className="detail-header-past" style={{
                            width: 200
                        }}>Faced similar problem in the past?</span>
                        <select class="form-select" aria-label="Default select example" style={{
                            width: 100,
                            display: 'inline-block'
                        }}>
                            <option selected>Select</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>    
                    </div>
                </span>
            </div>
            <div className="border p-2" style={{
                height: 100
            }}>
                <div className="detail-header-problem">Problem</div>
                <input className="problem-bar" type="text" placeholder="Descibe your problem/situation here" style={{
                    height: 80
                }}></input>   
            </div>
            <div className="submit-appointment" style={{
                marginTop: 15,
                display: 'flex',
                justifyContent: 'center'
                
            }}>
            <button className="btn btn-primary" style={{
                borderRadius: 0,
                backgroundColor: 'blueviolet'
            }}>Submit</button>
            </div>

        </div>
    );
}