module.exports = (sequelize, Datatypes) => {
    const model = sequelize.define('Account', {
        value: { type: Datatypes.FLOAT }
    }, {
        tableName: 'accounts',timestamps: false
    });
    model.associate= models =>{
        //เก็บ key ของ branch
        model.belongsTo(models.Branch,{foreignKey:'branch_id'})

        model.belongsToMany(models.Customer,{through:models.Owns,foreignKey:'ac_id'})
    }
    
    return model;
}