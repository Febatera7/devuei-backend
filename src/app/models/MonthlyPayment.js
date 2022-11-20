const { DataTypes, fn } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const MonthlyPayment = sequelize.define("MENSALIDADE", {
    ID_MENSALIDADE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    DATA_VENCIMENTO: {
        type: DataTypes.DATE,
        allowNull: false
    },
    CODIGO_PAGAMENTO: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    VALOR: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    DATA_PAGAMENTO: {
        type: DataTypes.DATE,
        allowNull: true
    },
    MENSALIDADE_ID_USUARIO: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
            model: 'USUARIO',
            key: 'ID_USUARIO'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    },
}, { freezeTableName: true });


module.exports = MonthlyPayment;
