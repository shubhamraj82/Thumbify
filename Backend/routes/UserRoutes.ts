import express from 'express';
import { getThumbnailById, getUserThumbnails } from '../controllers/UserController.js';
import protect from '../middleware/auth.js';

const UserRouter=express.Router();

UserRouter.get('/thumbnails',protect, getUserThumbnails);
UserRouter.get('/thumbnail/:id', protect, getThumbnailById);

export default UserRouter;