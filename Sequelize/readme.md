    npm init -y
    npm install express sequelize mysql2
    npm install sequelize-cli -g
    //สร้างไฟล config
    sequelize-cli init:config
    sequelize db:create 
    sequelize init:models

    //https://www.npmjs.com/package/sequelize-cli