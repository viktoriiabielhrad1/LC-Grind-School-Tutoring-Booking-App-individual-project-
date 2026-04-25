import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';

export const load = async () => {
    const bookings = await db.select().from(booking);
    return { bookings };
};