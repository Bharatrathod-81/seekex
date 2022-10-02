import './cardListing.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList, setShowForm } from '../../slice';
import { CardVeiw } from '../../components/cardView/cardView';


export const CardListing = ({ setEditDetails }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersList())
    },[])

    const { loading, usersList } = useSelector(state => state.usersList);

    return (
        <div className='cardListing_body'>
            {loading && <h1>Loading...</h1>}
            {usersList?.map(e => 
            <div 
            onClick={() => {
                setEditDetails(e);
                dispatch(setShowForm({boolean:true,data:e}))
            }}
            key={e.id}>
                <CardVeiw data={e}/>
            </div>)}
        </div>
    )
};