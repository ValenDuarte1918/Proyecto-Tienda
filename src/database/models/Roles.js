module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING        
        }
    };


    let config = {
        tableName: "roles",
        timestamps: false
    };

    const Rol = sequelize.define(alias, cols, config);

    return Rol;
}