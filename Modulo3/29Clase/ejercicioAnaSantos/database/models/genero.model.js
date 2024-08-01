module.exports = (sequelize, Sequelize, DataTypes) => {
    const Genero = sequelize.define('genero', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return Genero;
}