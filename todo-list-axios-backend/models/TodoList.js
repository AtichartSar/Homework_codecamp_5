module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('TodoList', {
        task: { type: DataTypes.STRING(255) },
    }, {
        tableName: 'tolists',
        timestamps:false
    })
    model.associate= models=>{
        //1.user มีหลาย todolist
        //todolist ต้องเก็บ key ของ user
        model.belongsTo(models.User,{foreignKey:'user_id'})
    }
    return model
}