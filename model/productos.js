const { DataTypes } = require('sequelize');
const db = require('../database/config');

const ProductModel = db.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_paciente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cod_cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tipo_trabajo: {
    type: DataTypes.ENUM(
      'Servicio Express',
      'Cristales con montaje',
      'Cristales solamente',
      'Montaje',
      'Montaje Express (1 Hora)',
      'Servicio'
    ),
    allowNull: false
  },
  tipo_formula: {
    type: DataTypes.ENUM(
      'Lejos',
      'Cerca',
      'Progresivo'
    ),
    allowNull: false
  },
  esfera_oiz: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  cilindro_oiz: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  eje_oiz: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  adicion_oiz: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true
  },
  dnp_lejos_oiz: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  dnp_alt_oiz: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  esfera_ode: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  cilindro_ode: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  eje_ode: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  adicion_ode: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true
  },
  dnp_lejos_ode: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  dnp_alt_ode: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false
  },
  tipo_cristal: {
    type: DataTypes.ENUM(
      'CRISTAL TRAIDO POR EL CLIENTE',
      'CR-39 Terminado',
      'AR Terminado',
      'Fotocromatico',
      'AR Terminado',
      'Anti Blue Terminado',
      'Progresivo terminado claro'
        ),
        allowNull: false
        },  
    medida_horizontal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    medida_vertical: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    medida_puente: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tipo_montura: {
        type: DataTypes.STRING,
        allowNull: false
    },
    servicios: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    porcentaje_coloracion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_coloracion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    fecha_Solicitud: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_entrega: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }, 
     usuario: {
        type: DataTypes.INTEGER, // o DataTypes.INTEGER según el tipo de dato que uses para la clave primaria de la tabla de usuarios
        allowNull: false,
        references: {
            model: 'users', // nombre de la tabla de usuarios como string
            key: 'id'
        }
    },
    obs: {
        type: DataTypes.TEXT,
        allowNull: true
    }
      }, {
        timestamps: true,
        underscored: true
      });
             
      module.exports = ProductModel;

      