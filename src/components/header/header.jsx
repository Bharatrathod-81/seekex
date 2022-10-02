import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowForm } from '../../slice';
import './header.css';

export const Header = () => {

    const dispatch = useDispatch();
    // const data = {
    //     id: NaN,
    //     DOB: '',
    //     email: '',
    //     avatar: '',
    //     fullName: '',
    //     country: ''
    // };

    return (
        <div className='header_body'>
            <button
                onClick={() => dispatch(setShowForm({ boolean: true, data:{} }))}
                type="button"
                class="btn btn-info">Create New</button>
        </div>
    )
}