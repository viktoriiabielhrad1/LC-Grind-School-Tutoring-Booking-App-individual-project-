import { db } from '$lib/server/db';
import { booking, user } from '$lib/server/db/schema';
import tutors from '$lib/data/tutors.json';
import subjects from '$lib/data/subjects.json';
import { eq } from 'drizzle-orm';

export const load = async () => {
    const allBookings = await db.select().from(booking);
    const allUsers = await db.select().from(user);

    return {
        bookings: allBookings,
        users: allUsers,
        tutors: Array.isArray(tutors.tutors) ? tutors.tutors : [],
        subjects
    };
};

export const actions = {
    deleteBooking: async ({ request }) => {
        const form = await request.formData();
        const id = form.get('id');

        if (!id || typeof id !== 'string') {
            return;
        }

        await db.delete(booking).where(eq(booking.id, id));
    }
};
