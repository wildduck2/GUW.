import { Router } from 'express';
import { homeHandler } from '../controlers';

const homeRoute = Router();

homeRoute.get('/', homeHandler);

export { homeRoute };
