const mysql = require("mysql");

const password = process.env.COMONGUS_PASSWORD;

const host = "localhost";

const user = "root";

const connection = mysql.createConnection({
  host,
  user,
  password,
  database: "comongus",
});

connection.connect();

module.exports = connection;

// process.env로 시작하는 모든 변수들은 환경 변수(environmental variables)입니다.
// 환경 변수는 터미널에서 다음 명령을 이용하여 설정할 수 있습니다.
// export COMONGUS_PASSWORD=your_password_here
