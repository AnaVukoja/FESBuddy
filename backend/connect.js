import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"fesbuddy",
    database:"fesbuddy",
    authPlugins: {
        caching_sha2_password: mysql.authPlugins.cachingSha2Password
    }
});

db.connect((err) => {
    if (err) {
        console.error("Greška pri spajanju na bazu:", err);
        return;
    }
    console.log("Spojena MySQL baza!");
});