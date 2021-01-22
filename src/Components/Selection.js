import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import acc2 from '../Pictures/acc2.jpg'
import iracing from '../Pictures/iracing.jpg'
import acc from '../Pictures/acc.jpg'
import rfactor from '../Pictures/rfactor.jpg'
import f1 from '../Pictures/formulaone.png'
import raceroom from '../Pictures/raceroom.jpg'
import './Selection.css'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Selection = ({ onRouteChange }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <MDBContainer className='flex-fill flex-wrap' container-fluid >
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={acc2}
                className="img-fluid"
                alt=""
              />

              <div >
                <MDBMask className="flex-center choices rounded mb-0" overlay="red-strong" onClick={() => onRouteChange('acc')}  >
                  <p className="white-text"  >Assetto Corsa Competizione</p>
                </MDBMask>
              </div>

            </MDBView>
          </MDBCol>
          <MDBCol md="4" >
            <MDBView hover zoom>
              <img
                src={acc}
                className="img-fluid"
                alt=""
              />
              <div>
              <MDBMask className="flex-center choices" overlay="red-strong">
                <p className="white-text">Assetto Corsa</p>
              </MDBMask>
              </div>
              
            </MDBView>
          </MDBCol>
          <MDBCol md="4" >
            <MDBView hover zoom>
              <img
                src={iracing}
                className="img-fluid"
                alt=""
              />
              <div>
              <MDBMask className="flex-center choices" overlay="red-strong" onClick={() => onRouteChange('iracing')}>
                <p className="white-text" >iRacing</p>
              </MDBMask>
              </div>
             
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="4">
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
          </MDBCol>
          <MDBCol md="4" >
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
          </MDBCol>
          <MDBCol md="4">
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>
  )
}

export default Selection;