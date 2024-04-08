import { DataTypes } from 'sequelize';
import { connection } from './connection';

const { UUID, UUIDV4, STRING } = DataTypes;

const Products = connection.define('products', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: true
    },
    address: {
        type: STRING,
        allowNull: true
    },

    job: {
        type: STRING,
        allowNull: true
    },
    amount: {
        type: STRING,
        allowNull: true
    }
});

Products.create({
    name: 'test',
    address: 'test',
    job: 'test',
    amount: 'test'
});

export { Products };
