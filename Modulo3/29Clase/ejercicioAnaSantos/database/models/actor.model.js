module.exports = (sequelize, Sequelize, DataTypes) => {
    const Actor = sequelize.define('actor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return Actor;
}