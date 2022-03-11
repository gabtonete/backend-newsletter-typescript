import { Model, DataTypes } from 'sequelize';
import { sequelize, synchronize } from '../helpers/SqliteDBHelper';

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'User'
  }
);

synchronize();