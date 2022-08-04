const { Sequelize, QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');

require('dotenv').config()

const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: 3306,
    dialect: 'mysql',
});

const connect = async () => {
    try {
        await db.authenticate();
        console.log('Se ha conectado correctamente a la base de datos');
    } catch (error) {
        console.error('Error al conectarse a la base de datos', error);
    }
}
const syncTables = async () => {
    try {
        await db.sync();
        console.log(`Tablas sincronizadas`);
        const roles = await db.query("select * from `roles`", { type: QueryTypes.SELECT })
        if (roles.length === 0) {
            await db.query("INSERT INTO `roles`(`id`, `nameRol`) VALUES (1,'Admin')", { type: QueryTypes.INSERT });
            await db.query("INSERT INTO `roles`(`id`, `nameRol`) VALUES (2,'Docente')", { type: QueryTypes.INSERT });
            console.log(`Roles Insertados`);
        }
        const usuario = await db.query("select * from `users`", { type: QueryTypes.SELECT })
        if (usuario.length === 0) {
            const hash = await bcrypt.hash('admin', 10,)
            await db.query("INSERT INTO `users`(`id`, `username`, `password`, `RoleId`) VALUES (1,'admin',:password,1)", { replacements: { password: hash }, type: QueryTypes.INSERT });
            console.log(`Usuario Admin Insertado`);
        }
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = {
    db,
    connect,
    syncTables
}
