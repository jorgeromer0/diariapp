import { StarRateTwoTone } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const diariSlice = createSlice({
  name: "diari",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active:{
    //   id:'ABC123',
    //   title:'',
    //   body:'',
    //   date: 123456,
    //   imageUrls: [],
    // }
  },
  reducers: {
    savingNewNote: ( state ) => {
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action ) => {
        state.notes.push( action.payload );
        state.isSaving = false;
    },
    setActiveNote: (state, action ) => {
        state.active = action.payload;
        state.messageSaved = '';
    },
    setNotes: (state, action ) => {
        state.notes = action.payload;
    },
    setSaving: (state ) => {
        state.isSaving = true;
        state.messageSaved = '';
    },
    updateNote: (state, action ) => { // payload: note
        state.isSaving = false;
        state.notes = state.notes.map( note => {

            if ( note.id === action.payload.id ) {
                return action.payload;
            }

            return note;
        });

        state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },


    clearNoteLogout: (state) => {
        state.isSaving = false;
        state.messageSaved = '';
        state.notes = [];
        state.active = null;
    },

    deleteNoteById: (state, action ) => {
        state.active = null;
        state.notes = state.notes.filter( note => note.id !== action.payload );
    },
}
});


// Action creators are generated for each case reducer function
export const { 
addNewEmptyNote,
clearNoteLogout,
deleteNoteById, 
savingNewNote,
setActiveNote,
setNotes,
setPhotosToActiveNote,
setSaving,
updateNote,
} = diariSlice.actions;