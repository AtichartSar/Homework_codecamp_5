

 module.exports =(sequelize, Datatypes) => {
    const model = sequelize.define(
        'Customer',
        {
            name: { type: Datatypes.STRING(40) },
            age: { type: Datatypes.INTEGER }
        },
        {
            tableName: 'customers',timestamps: false
        });
        model.associate = models =>{
      
            model.belongsToMany(models.Account,{through:models.Owns,foreignKey:'cus_id'})
    
        }
    return model;

}