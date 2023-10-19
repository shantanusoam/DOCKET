import React, { useState } from "react";
import SupplierDropdown from "./SupplierDropdown";
import PurchaseOrderDropdown from "./PurchaseOrderDropdown";

const DocketForm = ({ data, onSubmit }) => {
const uniqueSuppliers = new Set();

const supplierPOs = {};

data.forEach(order => {
  if (order.Supplier) {
    // If the supplier is not already in the supplierPOs object, create an array for it
    if (!supplierPOs[order.Supplier]) {
      supplierPOs[order.Supplier] = [];
    }
    // Add the PO Number to the corresponding supplier's array
    supplierPOs[order.Supplier].push(order);
    
  }
});

const suppliers = [];

// Iterate over the supplierPOs object and create the desired output format
Object.keys(supplierPOs).forEach((supplier, index) => {
    suppliers.push({
    id: index + 1,
    name: supplier,
    supplier_data: supplierPOs[supplier]
  });
});



  const [supplierId, setSupplierId] = useState("");
  const [purchaseOrders, setPurchaseOrders] = useState("");
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [ratePerHour, setRatePerHour] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the docket object
    const docket = {
      name,
      startTime,
      endTime,
      hoursWorked,
      ratePerHour,
      supplierId,
      purchaseOrders,
    };
    // Call the onSubmit function with the docket object
    onSubmit(docket);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <SupplierDropdown suppliers={suppliers} onSelectSupplier={setSupplierId} />
      {supplierId && (
        <PurchaseOrderDropdown
        data={data}
          purchaseOrders={suppliers[supplierId - 1]}
          onSelectPurchaseOrder={setPurchaseOrders}
        />
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
       {/* Input field for startTime */}
       <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Start Time</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>

      {/* Input field for endTime */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">End Time</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>

      {/* Input field for hoursWorked */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Hours Worked</label>
        <input
          type="number"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>

      {/* Input field for ratePerHour */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rate per Hour</label>
        <input
          type="number"
          value={ratePerHour}
          onChange={(e) => setRatePerHour(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Create Docket
      </button>
    </form>
  );
};

export default DocketForm;