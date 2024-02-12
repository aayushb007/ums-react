import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = 'http://localhost:3005/users';

export const fetchUsers = createAsyncThunk(
  'task/fetchUsers',
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  });

  export const addUserAsync = createAsyncThunk('task/addUser', async (task) => {
    const response = await fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  });
  export const deleteUserAsync = createAsyncThunk('task/deleteUser', async (taskId) => {
    const res = await fetch(`${apiUrl}/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const data = await res.json();
    return data;
  });
  
const userSlice = createSlice({
    name: "users",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
//     addTask: (state, action) => {
//       state.entities.push(action.payload);
//     },
//     deleteTask: (state, action) => {
//       state.entities = state.entities.filter((task) => task.id!== action.payload);
//     },
//     updateTask: (state, action) => {
//         const index = state.entities.findIndex((task) => task.id === action.payload.id);
//         state.entities[index] = action.payload;
  
//   }
},
    extraReducers: (builder)=>{
                builder.addCase(fetchUsers.fulfilled, (state, action) => {
                    state.entities = action.payload;
                    state.loading = false;
                });
                builder.addCase(fetchUsers.pending, (state) => {
                    state.loading = true;
                });
                builder.addCase(fetchUsers.rejected, (state) => {
                    state.loading = false;
                });
                builder.addCase(addUserAsync.fulfilled, (state, action) => {
                    state.entities.push(action.payload);
                });
                builder.addCase(addUserAsync.pending, (state) => {
                    state.loading = true;
                });
                builder.addCase(addUserAsync.rejected, (state) => {
                    state.loading = false;
                });
                builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
                    state.entities = state.entities.filter((task) => task.id!== action.payload);
                });
                
    }
})

export default userSlice.reducer;