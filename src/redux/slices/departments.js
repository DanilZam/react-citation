import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../axios'

export const fetchDepartments = createAsyncThunk('departments/fetchDepartments', async () => {
    const { data } = await axios.get('/departments')
    return data
})

export const fetchDepartmentsPies = createAsyncThunk('departments/fetchDepartmentsPies', async () => {
    const { data } = await axios.get('/departments/pies')
    return data
})

export const fetchDepartmentsLines = createAsyncThunk('departments/fetchDepartmentsLines', async () => {
    const { data } = await axios.get('/departments/lines')
    return data
})

const initialState = {
    departments: {
        items: [],
        status: 'loading',
    },
    departmentsPies: {
        items: [],
        status: 'loading',
    },
    departmentsLines: {
        items: [],
        status: 'loading',
    },
}

const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDepartments.pending]: (state) => {
            state.departments.items = []
            state.departments.status = 'loading'
        },
        [fetchDepartments.fulfilled]: (state, action) => {
            state.departments.items = action.payload
            state.departments.status = 'loaded'
        },
        [fetchDepartments.rejected]: (state) => {
            state.departments.items = []
            state.departments.status = 'error'
        },

        [fetchDepartmentsPies.pending]: (state) => {
            state.departmentsPies.items = []
            state.departmentsPies.status = 'loading'
        },
        [fetchDepartmentsPies.fulfilled]: (state, action) => {
            state.departmentsPies.items = action.payload
            state.departmentsPies.status = 'loaded'
        },
        [fetchDepartmentsPies.rejected]: (state) => {
            state.departmentsPies.items = []
            state.departmentsPies.status = 'error'
        },

        [fetchDepartmentsLines.pending]: (state) => {
            state.departmentsLines.items = []
            state.departmentsLines.status = 'loading'
        },
        [fetchDepartmentsLines.fulfilled]: (state, action) => {
            state.departmentsLines.items = action.payload
            state.departmentsLines.status = 'loaded'
        },
        [fetchDepartmentsLines.rejected]: (state) => {
            state.departmentsLines.items = []
            state.departmentsLines.status = 'error'
        },
    },
})

export const departmentsReducer = departmentsSlice.reducer