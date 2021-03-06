const Sequelize = require("sequelize");

module.exports = function(sequelize){
    const Zadaca = sequelize.define("zadaca",{
        idZadaca : {type: Sequelize.INTEGER, primaryKey : true, autoIncrement : true},
        idPredmet  : Sequelize.INTEGER,
        naziv : Sequelize.STRING,
        brojZadataka : Sequelize.INTEGER,
        rokZaPredaju : Sequelize.DATE,
        ukupnoBodova : Sequelize.DOUBLE,
        postavka : Sequelize.BLOB('long'),
        imeFajlaPostavke : Sequelize.STRING,
        tipFajlaPostavke : Sequelize.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Zadaca'    
    })
    return Zadaca;
};
