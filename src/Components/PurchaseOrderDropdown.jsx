import React from "react";

const PurchaseOrderDropdown = ({data, purchaseOrders, onSelectPurchaseOrder }) => {
    
    const findOrdersByPONumber = (poNumber) => {
 
        return data.filter(order =>
            poNumber == order['PO Number']
        );
      };
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Purchase Order</label>
      <select
        onChange={(e) => onSelectPurchaseOrder(findOrdersByPONumber(e.target.value))}
        className="mt-1 p-2 border rounded-md w-full"
      >
        <option value="">Select Purchase Order</option>
        {purchaseOrders.supplier_data.map((order,index) => (
          <option key={index} value={order['PO Number']}>
            {order['PO Number']} - {order.Description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PurchaseOrderDropdown;