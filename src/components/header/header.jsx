import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowForm } from '../../slice';
import './header.css';

export const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className='header_body'>
            <button
                onClick={() => dispatch(setShowForm(true))}
                type="button"
                class="btn btn-info">Create New</button>
        </div>
    )
}