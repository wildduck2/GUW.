import { DataTypes } from 'sequelize';
import { connection } from './connection';

const { UUID, UUIDV4, STRING } = DataTypes;

const Products = connection.define(
    'products',
    {
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
        },
        img: {
            type: STRING,
            allowNull: true
        },
        category: {
            type: STRING,
            allowNull: true
        }
    },
    {
        tableName: 'products',
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    }
);

// Products.create({
//     name: 'جسر أبو داود',
//     address: 'جدة - تقاطع الطرق - شارع الملك فهد وشارع - روضة الأطفال',
//     job: 'عزل مائى لبالطات الجسر العلوية',
//     amount: '3500 م2',
//     img: 'https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/products/projects%20for%20guw/1.png?t=2024-04-09T04%3A00%3A02.384Z',
//     category: 'commercial'
// });
//
// Products.create({
//     name: 'جسر حليمة السعدية',
//     address: 'جدة – تقاطع شارع حليمة السعدية وطريق المدينة المنورة',
//     job: 'عزل مائى لقواعد الجسر وبالطات الجسر العلوية',
//     amount: '7000 م2',
//     img: 'https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/products/projects%20for%20guw/2.png',
//     category: 'commercial'
// });
// Products.create({
//     name: 'جسر بنى مالك',
//     address: 'جدة – تقاطع طريق األمير ماجد وشارع بنى مالك',
//     job: 'عزل مائى لقواعد الجسروبالطات الجسر العلوية',
//     amount: '16000 م 2',
//     img: 'https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/products/projects%20for%20guw/3.png',
//     category: 'commercial'
// });
//
// Products.create({
//     name: 'جسر دوار الدراجة',
//     address: 'جدة – تقاطع طريق الملك فهد وشارع الروضة',
//     job: 'عزل مائى لقواعد الجسروبالطات الجسر العلوية',
//     amount: '15000 م2',
//     img: 'https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/products/projects%20for%20guw/4.png',
//     category: 'commercial'
// });

export { Products };
