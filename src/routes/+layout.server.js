
export const load = async (event) => {
    if (event.locals.user) {
        return {
            isLoggedIn: true,
            user: event.locals.user,
            role: event.locals.user?.role
        };
    }

    return {
        isLoggedIn: false,
        user: undefined
    };
};