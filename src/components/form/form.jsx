import './form.css';
import React, { useState } from 'react'
import { addUser, editUser, EditUser, postUser, setShowForm ,getUsersList} from '../../slice';
import { useDispatch, useSelector } from 'react-redux';

export const Form = ({ editDetail, setEditDetails }) => {

    const dispatch = useDispatch();

    const { usersList, editContain } = useSelector(state => state.usersList);
    const allAvatar = usersList.reduce((acc, curr) => acc.includes(curr.avatar) ? acc : [...acc, curr.avatar], []);


    const [showAvator, setShowAvator] = useState(false);
    const [userDetails, setUserDetails] = useState(editContain);
    const [worning, setWorning] = useState(false);

    const setAvator = (e) => {
        setUserDetails({...userDetails, avatar: e.target.src });
        setShowAvator(false);
    };

    const clickHandler = () => {
        if (userDetails.DOB && userDetails.email &&
            userDetails.fullName && userDetails.country) {
            if (editDetail) {
                dispatch(editUser(userDetails));
                dispatch(EditUser(userDetails));
                setEditDetails(null)
            } else {
                dispatch(postUser(userDetails));
                dispatch(addUser({id:usersList[usersList.length-1].id+1,...userDetails}));
                setUserDetails({
                    DOB: '',
                    email: '',
                    avatar: '',
                    fullName: '',
                    country: ''
                });
            };
            setWorning(false);
        } else {
            setWorning(true);
        }
    };
    
    const initializeFunc = () => {
        dispatch(setShowForm({boolean:false,data:{}}));
    };


    return (
        <div className='form_body'>
            <div className='form'>
                <form onSubmit={e => e.preventDefault()}>
                    {showAvator &&
                        <div
                            onClick={e => setAvator(e)}
                            class="d-flex justify-content-evenly option-img-container">
                            <img className='option-img' src={allAvatar[0]} alt='option-img' />
                            <img className='option-img' src={allAvatar[1]} alt='option-img' />
                            <img className='option-img' src={allAvatar[2]} alt='option-img' />
                        </div>
                    }
                    <div className="mb-3">
                        {userDetails?.avatar && <img className='option-img' src={userDetails?.avatar} alt='option-img' />}
                        <button
                            onClick={() => setShowAvator(true)}
                            class="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">Choose Avatar</button>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">User Name</label>
                        <input
                            onChange={e => setUserDetails({ ...userDetails, fullName: e.target.value })}
                            type="text"
                            className="form-control"
                            value={userDetails.fullName}
                            placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input
                            onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                            type="email"
                            className="form-control"
                            value={userDetails.email}
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Date Of Birth</label>
                        <input
                            onChange={e => setUserDetails({ ...userDetails, DOB: e.target.value })}
                            type="date"
                            className="form-control"
                            value={userDetails.DOB}
                            placeholder="Date of Birth" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Country</label>
                        <input
                            onChange={e => setUserDetails({ ...userDetails, country: e.target.value })}
                            type="text"
                            className="form-control"
                            value={userDetails.country}
                            placeholder="Country" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    {worning && <p>Fill All Details</p>}
                    <button
                        onClick={() => {
                            clickHandler();
                            initializeFunc();
                        }}
                        type="submit"
                        className="btn btn-primary m-3">Submit</button>
                    <button
                        onClick={() => initializeFunc()}
                        type="submit"
                        className="btn btn-primary">Cancel</button>
                </form>
            </div>
        </div>
    )
};