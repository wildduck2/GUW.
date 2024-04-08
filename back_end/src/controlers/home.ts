import { RequestHandler } from 'express';
import { Products } from '../sql';

export const homeHandler: RequestHandler = (req, res) => {
    Products.findAll().then((result) => {
        console.log(result);
    });

    res.json({ type: 'vimmer till i die' });
};
