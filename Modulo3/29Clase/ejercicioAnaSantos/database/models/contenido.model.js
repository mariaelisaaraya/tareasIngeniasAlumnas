module.exports = (sequelize, Sequeliz, DataTypes) => {
    const Contenido = sequelize.define('contenido', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poster: {
            type: DataTypes.STRING,
        },
        trailer: {
            type: DataTypes.STRING,
        },
        resumen: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genero_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return Contenido;
}
