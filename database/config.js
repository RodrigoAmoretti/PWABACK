import {
    HOST_DB,
    PASSWORD_DB,
    USER_DB,
    PORT_DB,
    DATABASE_DB
}from '../configs.js'
import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: HOST_DB,
    port: PORT_DB,
    user: USER_DB,
    password: PASSWORD_DB,
    database: DATABASE_DB
})

