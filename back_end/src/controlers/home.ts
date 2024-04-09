import { RequestHandler } from 'express';
import { Products } from '../sql';

export const homeHandler: RequestHandler = (req, res) => {
    Products.findAll()
        .then((products) => {
            console.log(products);
            res.json({ data: products, error: null });
        })
        .catch((err) => {
            res.json({ data: null, error: err });
        });
};
