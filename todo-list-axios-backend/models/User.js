
module.exports =(sequelize,DataTypes)=>{
    const model = sequelize.define('User',{
        username:{
            type:DataTypes.STRING(200),
            unique:true
        },
        password:{
            type:DataTypes.STRING(255)
        },
        name:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName: 'user',
        timestamps:false
    });
    model.associate= models=>{
        //1.user มีหลาย todolist
        //todolist ต้องเก็บ key ของ user
        model.hasMany(models.TodoList,{foreignKey:'user_id'})
    }
    return model
}