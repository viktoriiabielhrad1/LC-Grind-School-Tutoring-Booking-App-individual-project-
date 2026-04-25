import tutorsData from '$lib/data/tutors.json';

export const load = () => {
    return {
        tutors: tutorsData.tutors
    };
};
