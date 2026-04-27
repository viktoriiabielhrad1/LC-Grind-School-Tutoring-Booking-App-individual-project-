

import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const booking = sqliteTable('booking', {
    id: text('id').primaryKey(),
    name: text('name'),
    email: text('email'),
    subject: text('subject'),
    type: text('type'),
    level: text('level'),
    address: text('address'),
    datetime: integer('datetime', { mode: 'timestamp_ms' }),
    price: integer('price')
});