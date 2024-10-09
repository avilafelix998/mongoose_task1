import mongoose from "mongoose";

// Esquema de Venta
const salesSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'employee', required: true } 
  });
  
  // Modelo de Venta
  const Sales = mongoose.model('Sales', salesSchema);
  
  export default Sales