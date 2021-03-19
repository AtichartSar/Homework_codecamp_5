
module.exports = (sequelize, Datatypes) => {
    const model = sequelize.define('Branch', {
        name: {
            type: Datatypes.STRING(255)
        },
        size: {
            type: Datatypes.STRING(2)
        }
    }, {
        tableName: 'branches',timestamps: false
    });
    model.associate = models => {
        // Branch เป็น total ของ manager(จำเป็นต้องมี manager) ใช้ belongsTo
        // กำหนด branch เก็บ key ของ manager
        model.belongsTo(models.Manager, { foreignKey: 'manager_id' });
        model.hasMany(models.Account,{foreignKey:'branch_id'})

    };
    return model
}