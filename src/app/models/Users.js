const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const Users = sequelize.define("USUARIO", {
    ID_USUARIO: {
        type: DataTypes.INTEGER(10),
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
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    SITUACAO: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    TOKEN: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    DATAVA_VALIDADE_TOKEN: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DATA_CADASTRO: {
        type: DataTypes.DATE,
        allowNull: false
    },
    CPF: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
});


module.exports = Users;
