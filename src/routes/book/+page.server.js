import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';
export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();

        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const subject = formData.get('subject')?.toString().trim();
        const type = formData.get('type')?.toString().trim();
        const level = formData.get('level')?.toString().trim();
        const address = formData.get('address')?.toString().trim();
        const datetime = formData.get('datetime')?.toString().trim();

        if (!name || !email || !subject || !type || !level || !datetime) {
            return fail(400, { error: 'Please fill in all required fields.' });
        }



        cookies.set('lastSubjectBooked', subject, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365
        });



await db.insert(booking).values({
    id: crypto.randomUUID(),
    name,
    email,
    subject,
    type,
    level,
    address,
    datetime: new Date(datetime)            
});



        throw redirect(
    303,
    `/confirmation?subject=${subject}&type=${type}&level=${level}&datetime=${datetime}`
);

    }
};