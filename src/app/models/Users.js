const { DataTypes, fn } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const Users = sequelize.define("USUARIO", {
    ID_USUARIO: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    NOME: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    EMAIL: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    SENHA: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    PERFIL: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    SITUACAO: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    TOKEN: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    DATA_VALIDADE_TOKEN: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DATA_CADASTRO: {
        type: DataTypes.DATE(fn("NOW")),
        allowNull: false
    },
    CPF: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
}, { freezeTableName: true });


module.exports = Users;
