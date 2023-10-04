module.exports = (sequelize, dataTypes) => {
    let alias = 'Ciudad';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        nombre_ciudad: {
            type: dataTypes.STRING        
        }
    };


    let config = {
        tableName: "ciudad",
        timestamps: false
    };

    const Ciudad = sequelize.define(alias, cols, config);

    return Ciudad;
}