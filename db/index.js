const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});


const getUsers = async () => {
 
    try {
  
      const { rows } = await pool.query('SELECT * FROM users ORDER BY id ASC');
  
      return {
        users: rows,
        error: false
      };
    } catch( err ) {
        console.log(err)
      return ({
        error: true,
        code: err.code,
        routine: err.routine 
      });
    }
 }


module.exports = {
    getUsers,
}
