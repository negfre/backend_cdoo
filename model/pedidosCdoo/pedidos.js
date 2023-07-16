const { DataTypes, Sequelize } = require('sequelize');
const db = require('../../database/config');

const UserModel = require('../usuarios');
const TipoMontura = require('../productosCdoo/tipoMontura');
const Esfera = require('../productosCdoo/esfera');
const Cilindro = require('../productosCdoo/cilindro');
const Eje = require('../productosCdoo/eje');
const Adicion = require('../productosCdoo/adicion');
const DnpAltura = require('../productosCdoo/dnpAltura');
const MedidaHorizontalMontura = require('../productosCdoo/medidaHorizontalMontura');
const MedidaVerticalMontura = require('../productosCdoo/medidaVerticalMontura');
const MedidaPuenteMontura = require('../productosCdoo/medidaPuenteMontura');
const Servicios = require('../productosCdoo/servicios');
const TipoTrabajo = require('../productosCdoo/tipoTrabajo');
const TipoFormula = require('../productosCdoo/tipoFormula');
const Color = require('../productosCdoo/color');
const PorcentajeColor = require('../productosCdoo/porcentajeColor');
const TipoColoracion = require('../productosCdoo/tipoColoracion');
const ProductoCristal = require('../productosCdoo/productoCristal');





const Pedido = db.define(
  'Pedido',
  {
     id_pedido: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
     },
    nombre_paciente: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
     user_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       foreignKey: {
         references: {
           model: 'Usuario',
          },
         onDelete: 'CASCADE'
       }
     },
    
    // id_tipo_montura: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true
    //   // references: {
    //   //   model: 'TipoMonturas'
    //   //   },
    // },
    // id_esfera_izq: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Esferas'
    //   },
    // },
    // id_esfera_der: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Esferas'
    //   },
    // },
    // id_cilindro_izq: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Cilindros'
    //   },
    // },
    // id_cilindro_der: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Cilindros'
    //   },
    // },
    // id_eje_izq: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Ejes'
    //   },
    // },
    // id_eje_der: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Ejes'
    //   },
    // },
    // id_adicion_izq: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Adicions'
    //   },
    // },
    // id_adicion_der: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'Adicions'
    //   },
    // },
    // id_dnp_altura_izq: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'DnpAlturas'
        
    //   },
    // },
    // id_dnp_altura_der: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'DnpAlturas'
    //   },
    // },
    // id_medida_horizontal: {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: true
    //   // references: {
    //   //   model: 'MedidaHorizontalMonturas'
    //   // },
    // },
    // id_medida_vertical: {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: true
    //   // references: {
    //   //   model: 'MedidaVerticalMonturas'
    //   // },
    // },
    // id_medida_puente: {
    // type: Sequelize.DECIMAL(10,2),
    // allowNull: true
    // // references: {
    // //   model: 'MedidaPuenteMonturas'
        
    // // }
    // },
    // id_servicio: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'Servicios'
    // // },
    // },
    // id_tipo_trabajo: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'TipoTrabajos'
    // // }
    // },
    // id_tipo_formula: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'TipoFormulas'
    // // }
    // },
    // id_color: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'Colors'
    // // }
    // },
    // id_porcentaje: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'PorcentajeColors'
       
    // // },
    // },
    // id_tipo_coloracion: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'TipoColoracions'
    // // }
    // },
    // id_p_cristal: {
    // type: Sequelize.INTEGER,
    // allowNull: true
    // // references: {
    // //   model: 'ProductoCristals'
    // // },
    // },
    fecha_pedido: {
    type: Sequelize.DATE
    },
    fecha_entrega: {
    type: Sequelize.DATE,
    allowNull: true,
    },
    estado_pedido: {
    type: Sequelize.STRING,
    defaultValue: 'recibido',
    },
},
{
    timestamps: true,
    underscored: true,
}
);

// Definir las relaciones
// Asociaciones


// UserModel.hasMany(Pedido);
// TipoMontura.hasMany(Pedido);
// Esfera.hasMany(Pedido);
// // Esfera.hasMany(Pedido);
// Cilindro.hasMany(Pedido);
// //Cilindro.hasMany(Pedido);
// Eje.hasMany(Pedido);
// // Eje.hasMany(Pedido);
// Adicion.hasMany(Pedido);
// // Adicion.hasMany(Pedido);
// DnpAltura.hasMany(Pedido);
// // DnpAltura.hasMany(Pedido)
// MedidaHorizontalMontura.hasMany(Pedido);
// // MedidaVerticalMontura.hasMany(Pedido);
// MedidaPuenteMontura.hasMany(Pedido);
// Servicios.hasMany(Pedido);
// TipoTrabajo.hasMany(Pedido);
// TipoFormula.hasMany(Pedido);
// Color.hasMany(Pedido);
// PorcentajeColor.hasMany(Pedido);
// TipoColoracion.hasMany(Pedido);
// ProductoCristal.hasMany(Pedido);




//Pedido.belongsTo(UserModel, { foreignKey: 'id_usuario' });
Pedido.belongsTo(TipoMontura, { foreignKey: 'id_t_montura' });
Pedido.belongsTo(Esfera, { foreignKey: 'id_esfera_izq' });
Pedido.belongsTo(Esfera, { foreignKey: 'id_esfera_der' });
Pedido.belongsTo(Cilindro, { foreignKey: 'id_cilindro_izq' });
Pedido.belongsTo(Cilindro, { foreignKey: 'id_cilindro_der' });
Pedido.belongsTo(Eje, { foreignKey: 'id_eje_izq' });
Pedido.belongsTo(Eje, { foreignKey: 'id_eje_der' });
Pedido.belongsTo(Adicion, { foreignKey: 'id_adicion_izq' });
Pedido.belongsTo(Adicion, { foreignKey: 'id_adicion_der' });
Pedido.belongsTo(DnpAltura, { foreignKey: 'id_dnp_altura_izq'});
Pedido.belongsTo(DnpAltura, { foreignKey: 'id_dnp_altura_der' });
Pedido.belongsTo(MedidaHorizontalMontura, { foreignKey: 'id_mhm' });
Pedido.belongsTo(MedidaVerticalMontura, { foreignKey: 'id_mvm' });
Pedido.belongsTo(MedidaPuenteMontura, { foreignKey: 'id_mpm' });
Pedido.belongsTo(Servicios, { foreignKey: 'id_servicio' });
Pedido.belongsTo(TipoTrabajo, { foreignKey: 'id_t_trabajo' });
Pedido.belongsTo(TipoFormula, { foreignKey: 'id_t_formula' });
Pedido.belongsTo(Color, { foreignKey: 'id_color' });
Pedido.belongsTo(PorcentajeColor, { foreignKey: 'id_porcentaje' });
Pedido.belongsTo(TipoColoracion, { foreignKey: 'id_tipo_coloracion' });
Pedido.belongsTo(ProductoCristal, { foreignKey: 'id_producto_cristal' });


// Pedido.sync();
// UserModel.sync();
//  TipoMontura.sync();
//  Esfera.sync();
//  Cilindro.sync();
//  Eje.sync();
//  Adicion.sync();
//  DnpAltura.sync();
//  MedidaHorizontalMontura.sync();
//  MedidaVerticalMontura.sync();
//  MedidaPuenteMontura.sync();
//  Servicios.sync();
//  TipoTrabajo.sync();
//  TipoFormula.sync();
//  Color.sync();
//  PorcentajeColor.sync();
//  TipoColoracion.sync();
//  ProductoCristal.sync();

      // await UserModel.sync();
      // await TipoMontura.sync();
      // await Esfera.sync();
      // await Cilindro.sync();
      // await Eje.sync();
      // await Adicion.sync();
      // await DnpAltura.sync();
      // await MedidaHorizontalMontura.sync();
      // await MedidaVerticalMontura.sync();
      // await MedidaPuenteMontura.sync();
      // await Servicio.sync();
      // await TipoTrabajo.sync();
      // await TipoFormula.sync();
      // await Color.sync();
      // await PorcentajeColor.sync();
      // await TipoColoracion.sync();
      // await ProductoCristal.sync();
      // await Pedido.sync();





module.exports = Pedido;
