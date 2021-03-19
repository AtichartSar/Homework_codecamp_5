module.exports = (sequelize, Datatypes) => {
    const model = sequelize.define('Owns', {
        day: {
            type: Datatypes.STRING(255)
        }
    }, {
        tableName: 'owns',
        timestamps: false
    });
    return model;

}