import * as Actions from '../actions';

const initialState = {
    data      : [],
    panier    : [],
    infos     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
};

const hotelsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_HOTELS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.GET_PANIER:
        {
            return {
                ...state,
                panier: action.payload
            };
        }
        case Actions.ADD_NIGHTS:
        {
            return {
                ...state,
                panier: action.payload
            };
        }
        case Actions.OPEN_NEW_INFO_DIALOG:
            {
                return {
                    ...state,
                    infos: {
                        type : 'new',
                        props: {
                            open: true
                        },
                        data : null
                    }
                };
            }
            case Actions.CLOSE_NEW_INFO_DIALOG:
            {
                return {
                    ...state,
                    infos: {
                        type : 'new',
                        props: {
                            open: false
                        },
                        data : null
                    }
                };
            }
            case Actions.ADD_INFO:
                {
                    return {
                        ...state,
                        infos: {
                            type : action.payload,
                            props: {
                                open: true
                            },
                            data : null
                        }
                    };
                }
        default:
        {
            return state;
        }
    }
};

export default hotelsReducer;
