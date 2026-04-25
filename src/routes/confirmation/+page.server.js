export function load({ cookies }) {
    return { lastSubject: cookies.get('lastSubjectBooked') };
}
