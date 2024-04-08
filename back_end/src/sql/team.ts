import { DataTypes } from 'sequelize';
import { connection } from './connection';

const { UUID, UUIDV4, STRING } = DataTypes;

const Team = connection.define('team', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: true
    }
});

export { Team };
