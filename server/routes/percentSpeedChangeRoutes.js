import express from 'express';
// placeholder
import {
  getAllPercentages,
  createNewPercentage,
  updatePercentageById,
  deletePercentage,
} from '../controllers/percentSpeedChangeController.js';

const router = express.Router();

router.route('/').get(getAllPercentages).post(createNewPercentage);
router.route('/:id').put(updatePercentageById).delete(deletePercentage);

export default router;
