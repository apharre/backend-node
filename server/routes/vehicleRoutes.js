import express from 'express';

import getAllVehicles from '../controllers/vehicleControllers.js';

const router = express.Router();

// add more routes as we keep going
router.get('/', getAllVehicles);

export default router;
