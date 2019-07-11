import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_HOTELS = 'GET HOTELS';
export const ADD_NIGHTS='ADD NIGHTS';
export const GET_PANIER='GET PANIER';
export const OPEN_NEW_INFO_DIALOG='OPEN_NEW_INFO_DIALOG';
export const CLOSE_NEW_INFO_DIALOG='CLOSE_NEW_INFO_DIALOG';
export const ADD_INFO='ADD_INFO';

export function getHotels()
{
    const request = axios.get('/api/hotels');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_HOTELS,
                payload: response.data
            })
            
        );
}
export function ajouterNuits(params)
{

    const request = axios.get('/api/hotel/', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : ADD_NIGHTS,
                payload: response.data
            })
            
        );
}
export function getPanier()
{
    const request = axios.get('/api/panier');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_PANIER,
                payload: response.data
            })
      );
}


export function openNewInfoDialog()
{
    return {
        type: OPEN_NEW_INFO_DIALOG
    }
}

export function closeNewInfoDialog()
{
    return {
        type: CLOSE_NEW_INFO_DIALOG
    }
}

export function addInfo(newInfo)
{
    return (dispatch) => {


        const request = axios.post('/api/clients/save', {
            newInfo
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_INFO,
                    payload:'recap'
                })
            ])
        );
    };
}
export function msgConfirm(){
    return (dispatch) => {
    dispatch(showMessage({message: 'Operation effectuée avec succès'}));
   
    }
}


