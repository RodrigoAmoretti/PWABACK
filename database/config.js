import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host:HOST_DB,
    port:PORT_DB,
    user:USER_DB,
    password:PASSWORD_DB,
    database:DATABASE_DB 
})

