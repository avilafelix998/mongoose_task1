import mongoose from "mongoose";

// Esquema de Empleado
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Modelo de Empleado
const Employee = mongoose.model('Employee', EmployeeSchema);


export default Employee