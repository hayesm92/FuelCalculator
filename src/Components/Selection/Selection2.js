import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import acc2 from '../../Pictures/acc2.jpg'
import iracing from '../../Pictures/iracing.jpg'
import acc from '../../Pictures/acc.jpg'
import rfactor from '../../Pictures/rfactor.jpg'
import f1 from '../../Pictures/formulaone.png'
import raceroom from '../../Pictures/raceroom.jpg'
import './Selection.css'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Selection2 = ({ onRouteChange }) => {
    return (
        <div 
        className='d-flex flex-row justify-content-around flex-wrap' 
        style = {{backgroundColor: 'black'}}>
            <div className='mt-4' style={{ width: '300px' }}>
                <MDBView hover zoom>
                    <img
                        src={acc2}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center choices" overlay="red-strong" onClick={() => onRouteChange('acc')}  >
                        <p className="white-text"  >Assetto Corsa Competizione</p>
                    </MDBMask>
                </MDBView>
            </div>

            <div className='mt-4' style={{ width: '300px' }} >
                <MDBView hover zoom>
                    <img
                        src={acc}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center choices" overlay="red-strong">
                        <p className="white-text">Assetto Corsa</p>
                    </MDBMask>
                </MDBView>
            </div>

            <div className='mt-4' style={{ width: '300px' }}>
                <MDBView hover zoom>
                    <img
                        src={iracing}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center choices" overlay="red-strong" onClick={() => onRouteChange('iracing')}>
                        <p className="white-text" >iRacing</p>
                    </MDBMask>
                </MDBView>
            </div>

            <div className='mt-4' style={{ width: '300px' }}>
                <MDBView hover zoom>
                    <img
                        src={raceroom}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center choices" overlay="red-strong">
                        <p className="white-text">Raceroom</p>
                    </MDBMask>
                </MDBView>
            </div>

            <div className='mt-4' style={{ width: '300px' }}>
                <MDBView hover zoom>
                    <img
                        src={rfactor}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center choices" overlay="red-strong">
                        <p className="white-text">rFactor</p>
                    </MDBMask>
                </MDBView>
            </div>

            <div className='mt-4' style={{ width: '300px' }}>
                <MDBView hover zoom>
                    <img
                        src={f1}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center choices" overlay="red-strong">
                        <p className="white-text">Codemaster's F1</p>
                    </MDBMask>
                </MDBView>
            </div>



        </div>
    )
}

export default Selection2;