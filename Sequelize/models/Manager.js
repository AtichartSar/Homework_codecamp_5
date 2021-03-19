module.exports =(sequelize, Datatypes) => {
    const model = sequelize.define('Manager', {
        name: {
            type: Datatypes.STRING(255),

        },
        experience: {
            type: Datatypes.INTEGER
        }
    }, {
        tableName: 'managers',
        timestamps: false
    });

    model.associate = models => {
        model.hasOne(models.Branch, { foreignKey: 'manager_id' })
    }
    return model;
}