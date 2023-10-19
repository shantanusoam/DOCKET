import React from "react";

const SupplierDropdown = ({ suppliers, onSelectSupplier }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Supplier</label>
      <select
        onChange={(e) => onSelectSupplier(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full"
      >
        <option value="">Select Supplier</option>
        {suppliers.map((supplier) => (
          <option key={supplier.id} value={supplier.id}>
            {supplier.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SupplierDropdown;