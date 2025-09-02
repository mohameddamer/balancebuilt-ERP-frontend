import React, { useEffect, useState } from 'react';
import API, { safeGet } from '../api';
import Toolbar from './Toolbar';

export default function SalesOrders() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    safeGet('/api/procurement/sales_orders', 'sales_orders').then(setItems);
  }, []);

  return (
    <div className='card'>
      <h3>Sales Orders</h3>
      <Toolbar
        onNew={() => alert('Create sales order via API')}
        onEdit={() => {}}
        onDelete={() => {}}
        onSearch={(q) =>
          API.get('/api/procurement/sales_orders', { params: { q } }).then((r) =>
            setItems(r.data)
          )
        }
        filterOptions={[{ value: 'contains', label: 'Contains' }]}
      />
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sales #</th>
            <th>Customer</th>
            <th>Subtotal</th>
            <th>Tax</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.order_number}</td>
              <td>{o.customer_name}</td>
              <td>{o.subtotal}</td>
              <td>{o.tax_amount}</td>
              <td>{o.total_amount}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
