import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const selectUserState = (state: RootState) => state.user;

export const getUsers = createSelector(
    selectUserState,
    (users) => {
        return users.data;
    }
);

export const getUserLargePic = createSelector(
    getUsers,
    (user) => {
        return user[0].picture.large;
    }
);

export const isUsersFetchPending = createSelector(
    selectUserState,
    (userState) => userState.pending > 0
);

export const selectUserError = createSelector(
    selectUserState,
    (userState) => userState.error
);
