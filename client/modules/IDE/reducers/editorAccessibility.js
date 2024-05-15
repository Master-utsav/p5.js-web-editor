import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lintMessages: [],
  forceDesktop: false
};

let messageId = 0;

const editorAccessibilitySlice = createSlice({
  name: 'editorAccessibility',
  initialState,
  reducers: {
    updateLintMessage: (state, action) => {
      messageId += 1;
      state.lintMessages.push({
        severity: action.payload.severity,
        line: action.payload.line,
        message: action.payload.message,
        id: messageId
      });
    },
    clearLintMessages: (state) => {
      state.lintMessages = [];
    },
    toggleForceDesktop: (state) => {
      state.forceDesktop = !state.forceDesktop;
    }
  }
});

export const editorAccessibilityActions = editorAccessibilitySlice.actions;

export default editorAccessibilitySlice.reducer;
