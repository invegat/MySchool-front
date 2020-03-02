import axios from 'axios';

// get all resources
export const GET_RESOURCES_REQUEST = 'GET_RESOURCES_REQUEST';
export const GET_RESOURCES_SUCCESS = 'GET_RESOURCES_SUCCESS';
export const GET_RESOURCES_FAILURE = 'GET_RESOURCES_FAILURE';
// post new resource
export const ADD_RESOURCE_REQUEST = 'ADD_RESOURCE_REQUEST';
export const ADD_RESOURCE_SUCCESS = 'ADD_RESOURCE_SUCCESS';
export const ADD_RESOURCE_FAILURE = 'ADD_RESOURCE_FAILURE';
// delete a resource
export const DELETE_RESOURCE_REQUEST = 'DELETE_RESOURCE_REQUEST';
export const DELETE_RESOURCE_SUCCESS = 'DELETE_RESOURCE_SUCCESS';
export const DELETE_RESOURCE_FAILURE = 'DELETE_RESOURCE_FAILURE';

const apiUrl = "https://floating-crag-05232.herokuapp.com"
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

export const getResources = () => {
    return (dispatch) => {
        dispatch(getResourcesRequest());
        return axios.get(`${apiUrl}/resources/${userId}`, config)
            .then(response => {
                dispatch(getResourcesSuccess(response.data.resources));
            })
            .catch(error => {
                dispatch(getResourcesFailure(error));
            })
    }
}

export const getResourcesRequest = () => {
    return {
        type: GET_RESOURCES_REQUEST
    }
}

export const getResourcesSuccess = (resources) => {
    return {
        type: GET_RESOURCES_SUCCESS,
        payload: resources
    }
}

export const getResourcesFailure = (error) => {
    return {
        type: GET_RESOURCES_FAILURE,
        payload: error
    }
}

export const addResource = (info) => {
    return (dispatch) => {
        dispatch(addResourceRequest());
        return axios.post(`${apiUrl}/resources`, info, config)
            .then(response => {
                dispatch(addResourceSuccess(response.data.newResource));
            })
            .catch(error => {
                dispatch(addResourceFailure(error));
            })
    }
}

export const addResourceRequest = () => {
    return {
        type: ADD_RESOURCE_REQUEST
    }
}

export const addResourceSuccess = (info) => {
    return {
        type: ADD_RESOURCE_SUCCESS,
        payload: info
    }
}

export const addResourceFailure = (error) => {
    return {
        type: ADD_RESOURCE_FAILURE,
        payload: error
    }
}

export const deleteResource = (id) => {
    return (dispatch) => {
        dispatch(deleteResourceRequest());
        return axios.delete(`${apiUrl}/resources/${id}`, config)
            .then(response => {
                dispatch(deleteResourceSuccess(id));
            })
            .catch(error => {
                dispatch(deleteResourceFailure(error));
            })
    }
}

export const deleteResourceRequest = () => {
    return {
        type: DELETE_RESOURCE_REQUEST
    }
}

export const deleteResourceSuccess = (id) => {
    return {
        type: DELETE_RESOURCE_SUCCESS,
        payload: id
    }
}

export const deleteResourceFailure = (error) => {
    return {
        type: DELETE_RESOURCE_FAILURE,
        payload: error
    }
}