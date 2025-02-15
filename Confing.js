const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VUW2+jOBj9Kyu/Jp0AAUIiVVoIlBDIhRCay2q0MmDABAi1uYRU+e8r0lbtw85slycLzPHxdy6vID9jikzUgskrKAiuYYm6ZdkWCEyAUoUhIqAPAlhCMAH6og4L4VqzwlxAtTgbpAqar3hqnI493oXHrVlzlF0R68l4BLc+KCovxf5vAC+JPae93uBirkfeCDqqcVTXphlHZvEyM63UcnEebw/hU2I/gluHCDHBeaQVMcoQgamJ2jXE5Hv0malwbR01wRq9jnXFN9zT+nzVpenSshhC/Xh9YbZmb0zS5nv09QpvX+L6sGOqPabM1p6PVR9yPuTz5KmSbKsWZlbmkb3NvNGnOMpRYAQoL3HZfnvuU6NuCmvUGz/7/mxUJbNwXGKBGjtONS9KMRrI3vK0IlfIHL5HfLMjT+jgeXY+8ldOcFAYZ+EIkLixmfL6dae5A4tLNlc+kr8SX5MPr5z+z9zxcp9gXx2KDZ4/j8xZMpWtuT1uWt+dUXUh0bkmRcmo9mbR9+hLon8yI19PU0zn5nPr2KrDxptGw/XUUpTGTCl7Cg6Nm0Wf9GFZkd+xdHP3wsoGz2Ne763mw+tGEsWeLliUzrkA+stl23JZU2ra7KUhqmBm1YDsml7ia87unO3YOvIG7P4US6hc5sd4M3CXif14v9EJtUYAJuytDwiKMC0JLPE5794JfQCD2kE+QeV9uECy6qmxZOen3jUhgp264+dxsTlnkZkF9dUYck5Y2EnYY1/sR9AHBTn7iFIUzDAtz6RdIEphhCiY/PWzD3J0Kd9k6w4bsn0QYkJLN6+K9AyDD00/PkLfP1d56bS5P+0WiIAJ8/kalSXOI9pNscoh8WNco2kMSwomIUwpuvVBgGrsow4PwOWwWm+C2cbjUtvZaEPXUZDdUY7P+duWIfTGnh+MHkKRRQ88xwwfJGnIPKAg5HmG8T3f40Ef4PfEdP/8UsDYvLiJqmKDrNXUMcXksluNFDFGhXYX4W3yiKAATEpSoT7woH+qiu35hPLf1UayWuzDl5rYREJ27G+X2lHFdCxtpS+4b4qCyetnS03PQYenKZygWfII9EF2NyDubs4J/Egcj4cjluUmvPAn/dF0g4RF8SNHJeiDHHa7gU5QluL8j9Xf5+6wdyU6mACVEKf03g/5gl3ximYOpjVhdF32I3kayeBTuY8AvFmMbe0s4vzZtUk3l3o1fjLbXI4Oi0xtxQVx+FqW3faabIgSPf4LSEc/z43BJR0wp/KoVNDgL7sDn2JuR6bbomWDQJnyojgonc1eMbHnYMeDmUprlX8RJVZotGdmeXmiq9jRyrzkTf6Y8UqXlg8HfT1sv5TmxUC85M5a2eibREc9WUukhK9kTlhhdj9nWUE/LabbfCUabviiikdi4A3LxJnpS47hNKGoD8zYKrw2XO1nznEVvUfzXg3peyXje2xe3/0WYnRvuHcl/lOxT+szt/4XjPfO/IW9lMA/zc/LXJGkuet713rj0KIxdHUeSVViMpXVyE8LyjOwOYDb7WcfFCkswzPJwATQzIOgD1JIS/kzulucIVrCrAATdjQcC+JwyIl9kLVyUTglLD8SD+TuWbcauP0D9SUM/wsIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'non',              
    EMOJIS: process.env.EMOJIS || "⚔️,👿,🌎,💜",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no",            
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by Gremlin 0_o',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MESSAGE || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "Gremlin 0_o",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

