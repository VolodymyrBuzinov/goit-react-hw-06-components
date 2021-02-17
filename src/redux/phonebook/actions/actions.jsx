import actionTypes from './actionsTypes';
import { v4 as uuidv4 } from 'uuid';

const actionAdd = (name, number) => ({
    type: actionTypes.ADD,
    payload: {id:uuidv4(), name, number},
});
const actionDelete = id => ({
    type: actionTypes.DELETE,
    payload: id,
});
const actionFilter = value => ({
    type: actionTypes.FILTER,
    payload: value,
})

export default  { actionAdd,  actionDelete, actionFilter};