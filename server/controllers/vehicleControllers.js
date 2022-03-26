// import mongoose from 'mongoose';
import VehicleDocument from '../models/vehicleFormat.js';

const getAllVehicles = async (req, res) => {
  try {
    const vehicleDocuments = await VehicleDocument.find();
    console.log(vehicleDocuments);
    res.status(200).json(vehicleDocuments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export { getAllVehicles };
export default getAllVehicles;
