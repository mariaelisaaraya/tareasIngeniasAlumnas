module.exports = (sequelize, Sequelize, DataTypes) => {
    const TagsDeContenido = sequelize.define('tags_de_contenido', {
        contenido_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
    });
    return TagsDeContenido;
}