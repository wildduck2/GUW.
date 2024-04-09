import { Router } from 'express';
import { homeHandler } from '../controlers';

const homeRoute = Router();

homeRoute.get('/works', homeHandler);

export { homeRoute };
