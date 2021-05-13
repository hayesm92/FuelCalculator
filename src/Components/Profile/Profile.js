import React from 'react';
import './Profile.css'
import gulf from '../../Pictures/gulf.jpg'

const Profile = ({
    savedArray,
    showModalArray,
    storeIdNum,
    modalCar,
    modalTrack,
    modalAvg,
    modalLiters,
    modalEstimate,
    deleteSaved,
    getAlert

}) => {
  
    return (
        <div>
            <div id='pbg'>
                <img src= {gulf} alt="" />
            </div>
            <div className='profilebg'>
                <div>
                    <h1 id='main-title' className='profile-title'>Profile</h1>
                    <h3 id='user-title'> Hello Maurice</h3>
                    <p id='date-joined'>Date Joined: 2/18/2021</p>
                    {/* <div id = 'profilePic'> */}
                        {/* profile picture */}

                    {/* </div> */}
                </div>

                <h3 id='saved-title' className='profile-title'>Saved Calculations</h3>
                <div id='saved-calculations'>
                    {savedArray.map(x => {
                        return <div className='saved-box'>
                            {x} </div>
                    })}

                <div className="modal fade" id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header" >
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div id="boxBody" class="modal-body" >
                                <div className="modalDiv"><p className="modalP">Car: {modalCar}</p></div>
                                <div className="modalDiv"><p className="modalP">Track: {modalTrack}</p></div>
                                <div className="modalDiv"><p className="modalP">Lap Time: {modalAvg}</p></div>
                                <div className="modalDiv"><p className="modalP">Liters Per Lap: {modalLiters}</p></div>
                                <div className="modalDiv"><p className="modalP">Estimated Liters Needed: {modalEstimate} </p></div>
                            </div>
                            <div>
                                    {/* picture of car and track */}

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary btn-modal-one" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger btn-modal-one" data-bs-toggle="modal"
                                        data-bs-target="#alert" data-bs-dismiss="modal" >Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className="modal fade"
                    id='alert' tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" >
                        <div class="modal-content" >
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div id="boxBody" class="modal-body">
                                    Are you sure?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={deleteSaved}>Yes</button>
                            </div>
                        </div>
                     </div>
                </div>
                 
            </div>
        </div>









        </div>

    )
}

export default Profile;