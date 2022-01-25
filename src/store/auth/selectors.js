export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getEmail = state => state.auth.user.email;

export const authSelectors = {
    getIsLoggedIn,
    getUsername,
};
