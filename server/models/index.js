const db = require("../db");

module.exports = {
  todolist: {
    get: function () {
      return new Promise((resolve, reject) => {
        const queryStr = "SELECT * FROM todolist";
        db.query(queryStr, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    },
    post: function (value) {
      return new Promise((resolve, reject) => {
        const queryStr = `INSERT INTO todolist(username, text) VALUES ?`;
        const values = [value];

        db.query(queryStr, [values], (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    },
  },
};
