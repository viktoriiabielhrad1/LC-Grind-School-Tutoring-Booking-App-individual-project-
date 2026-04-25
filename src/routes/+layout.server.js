export const load = async (event) => {
    return { 
        isLoggedIn: !!event.locals.user,
        user: event.locals.user,
        role: event.locals.user?.role ?? null
    };
};
