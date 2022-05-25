import express from 'express';
// placeholder
import {
  getAllPercentages,
  createNewPercentage,
  updatePercentage,
  deletePercentage,
} from '../controllers/percentSpeedChangeController.js';

const router = express.Router();

router.route('/').get(getAllPercentages).post(createNewPercentage);
router.route('/:id').put(updatePercentage).delete(deletePercentage);

export default router;
