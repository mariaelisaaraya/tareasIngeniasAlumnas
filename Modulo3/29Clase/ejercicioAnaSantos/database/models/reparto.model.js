module.exports = (sequelize, Sequelize, DataTypes) => {
    const Reparto = sequelize.define('reparto_de_contenido', {
        contenido_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return Reparto;
}