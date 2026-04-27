import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';
import subjectInfo from '$lib/data/subjectInfo.json';

/** @type {any} */
const subjectInfoAny = subjectInfo;

/**
 * @param {string} subject
 * @param {string} type
 */
function getPrice(subject, type) {
    const info = subjectInfoAny[subject];
    if (!info || !info.pricing) return 0;

    if (type === "online") return info.pricing.online;
    if (type === "home") return info.pricing.homeVisit;

    return 0;
}



export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const subject = data.get('subject')?.toString();
        const type = data.get('type')?.toString();
        const level = data.get('level')?.toString();
        const address = data.get('address')?.toString();
        const datetime = data.get('datetime')?.toString();

        // required fields check
        if (!name || !email || !subject || !type || !level || !datetime) {
            return fail(400, { error: 'Please fill in all required fields.' });
        }

    
        /** @type {string} */
        const subjectStr = subject;

        /** @type {string} */
        const typeStr = type;

        const price = getPrice(subjectStr, typeStr);
        // Address required for home visit
        if (type === 'home' && !address) {
            return fail(400, { error: 'Address is required for a home visit.' });
        }

        // Date must be in the future
        const chosen = new Date(datetime);
        if (chosen <= new Date()) {
            return fail(400, { error: 'Please choose a future date/time.' });
        }

        // Save cookie
        cookies.set('lastSubjectBooked', subject, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365
        });

        // Save booking
        await db.insert(booking).values({
            id: crypto.randomUUID(),
            name,
            email,
            subject,
            type,
            level,
            address,
            datetime: chosen,
            price
        });

        throw redirect(
            303,
            `/confirmation?subject=${subject}&type=${type}&level=${level}&datetime=${datetime}&price=${price}
`
        );
    }
};
