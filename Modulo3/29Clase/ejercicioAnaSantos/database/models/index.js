const { Sequelize, DataTypes, Op } = require('sequelize');
const { db } = require('../../config/config');

const sequelize = new Sequelize(
    db.DB_NAME,
    db.DB_USER,
    db.DB_PASSWORD,
    {
        host: db.DB_HOST,
        dialect: db.dialect
    }
);

const database = {};
database.Sequelize = Sequelize;
database.Op = Op;
database.sequelize = sequelize;

//Inicializacion de las tablas
database.actor = require('./actor.model')(sequelize, Sequelize, DataTypes);
database.categoria = require('./categoria.model')(sequelize, Sequelize, DataTypes);
database.contenido = require('./contenido.model')(sequelize, Sequelize, DataTypes);
database.genero = require('./genero.model')(sequelize, Sequelize, DataTypes);
database.reparto = require('./reparto.model')(sequelize, Sequelize, DataTypes);
database.tag = require('./tag.model')(sequelize, Sequelize, DataTypes);
database.tagsDeContenido = require('./tagsDeContenido.model')(sequelize, Sequelize, DataTypes);

//Relaciones entre las tablas
database.actor.belongsToMany(db.contenido, { 
    through: db.reparto,
    foreignKey: 'actor_id',
    otherKey: 'contenido_id'
});
database.contenido.belongsToMany(db.actor, {
    through: db.reparto,
    foreignKey: 'contenido_id',
    otherKey: 'actor_id'
});
database.categoria.hasMany(db.contenido, { foreignKey: 'categoria_id' });
database.contenido.belongsTo(db.categoria, { foreignKey: 'categoria_id' });
database.genero.hasMany(db.contenido, { foreignKey: 'genero_id' });
database.contenido.belongsTo(db.genero, { foreignKey: 'genero_id' });
database.contenido.belongsToMany(db.tag, {
    through: db.tagsDeContenido,
    foreignKey: 'contenido_id',
    otherKey: 'tag_id'
});
database.tag.belongsToMany(db.contenido, {
    through: db.tagsDeContenido,
    foreignKey: 'tag_id',
    otherKey: 'contenido_id'
});

const Actor = database.actor;
const Categoria = database.categoria;
const Contenido = database.contenido;
const Genero = database.genero;
const Reparto = database.reparto;
const Tag = database.tag;
const TagsDeContenido = database.tagsDeContenido;

//Exportamos las tablas
sequelize.sync().then(() => {
    inicial();
}).catch((error) => {
    console.log("Error syncing database: ", error);
});

module.exports = database;