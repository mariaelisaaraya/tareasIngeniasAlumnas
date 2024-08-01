module.exports = (sequelize, Sequelize, DataTypes) => {
    const Tag = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return Tag;
}