const db = require('./models/index');
const express=require('express');
const app = express();
const cors = require('cors')

const managerRoutes = require('./routes/Manager')
const branchRoutes = require('./routes/Branch')
const accountRoutes = require('./routes/Account')
const customerRoutes = require('./routes/Customer')


//middleware
app.use(express.json());
// post Nested Object = { person: { name: cw } }
app.use(express.urlencoded({extends:true}))
//have permission to access selected resources from a server at a different origin
app.use(cors())

//middleware
app.use('/managers',managerRoutes);
app.use('/branches',branchRoutes);
app.use('/accounts',accountRoutes);
app.use('/customers',customerRoutes);




// {force:true} ทุกครั้งที่รันโปรแกรมใหม่ให้ดรอปตารางทิ้งแล้วสร้างไหม่
db.sequelize.sync({force:false}).then(()=>{
    console.log("database is sync");
    const port = 8000;
    app.listen(port,()=>{
        console.log(`server running port ${port}`);
    })
});