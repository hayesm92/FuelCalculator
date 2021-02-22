import React from 'react';
import './Profile.css'

const Profile = ({savedArray}) => {

    const arrTwo = [1,2,3,4,5];
    const arr = [[<div>Hello</div>,<div>Maurice</div>,'Hayes'], ['There']] 
    const obj = {
        
    }
       

    
    return (
        <div className='profilebg'>
            <div>
                <h1 id='main-title' className='profile-title'>Profile</h1>
                <h3 id='user-title'> Hello Maurice</h3>
                <p id='date-joined'>Date Joined: 2/18/2021</p>
            </div>

            <div>
                <h3 id='saved-title' className='profile-title'>Saved Calculations</h3>
                <div id='saved-calculations'>
                    {savedArray.map(x => {
                        return <div className='saved-box'>{x}</div>; 
                        
                        
                    })}

                  
                           
                 
                    {/* <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>
                    <div className='saved-box'></div>  */}
                </div>
            </div>

        </div>

    )
}

export default Profile;