import express from 'express';
import { deleteThumbnail, generateThumbnail } from '../controllers/ThumbnailController.js';

const ThumbnailRouter = express.Router();

ThumbnailRouter.post('/generate-thumbnail',generateThumbnail);
ThumbnailRouter.delete('/delete/:id',deleteThumbnail);

export default ThumbnailRouter;