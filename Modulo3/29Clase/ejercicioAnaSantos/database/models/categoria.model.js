module.exports = (sequelize, Sequelize, DataTypes) => {
    const Categoria = sequelize.define('categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        temporadas: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return Categoria;
}