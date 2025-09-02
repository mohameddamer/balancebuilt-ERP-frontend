import React, {useState} from 'react';
import Vendors from './components/Vendors';
import Products from './components/Products';
import Warehouses from './components/Warehouses';
import PurchaseOrders from './components/PurchaseOrders';
import SalesOrders from './components/SalesOrders';
import Inventory from './components/Inventory';
import Finance from './components/Finance';
import Reports from './components/Reports';
import Upload from './components/Upload';
import SearchResults from './components/SearchResults';
export default function App(){ const [page,setPage]=useState('dashboard'); const [searchResults,setSearchResults]=useState(null);
  return (<div className='app'>
    <div className='sidebar'>
      <div className='logo'>Balance Built</div>
      <div className='search'><input placeholder='Search vendors, products, POs, invoices...' onKeyDown={e=>{ if(e.key==='Enter'){ fetch((import.meta.env.VITE_BACKEND_URL||'http://localhost:8000')+'/api/search/q/'+encodeURIComponent(e.target.value)).then(r=>r.json()).then(setSearchResults); setPage('search'); } }} /></div>
      <div className='nav'>
        <div className='section'>MASTER</div>
        <a href='#' onClick={e=>{e.preventDefault();setPage('vendors')}}>Vendors</a>
        <a href='#' onClick={e=>{e.preventDefault();setPage('products')}}>Products</a>
        <a href='#' onClick={e=>{e.preventDefault();setPage('warehouses')}}>Warehouses</a>
        <div className='section'>PROCUREMENT</div>
        <a href='#' onClick={e=>{e.preventDefault();setPage('purchase_orders')}}>Purchase Orders</a>
        <a href='#' onClick={e=>{e.preventDefault();setPage('sales_orders')}}>Sales Orders</a>
        <a href='#' onClick={e=>{e.preventDefault();setPage('inventory')}}>Inventory</a>
        <div className='section'>FINANCE</div>
        <a href='#' onClick={e=>{e.preventDefault();setPage('finance')}}>Finance (GL, AP, AR, Budgets)</a>
        <div className='section'>REPORTS</div>
        <a href='#' onClick={e=>{e.preventDefault();setPage('reports')}}>Reports</a>
        <div className='section'>TOOLS</div>
        <a href='#' onClick={e=>{e.preventDefault();setPage('upload')}}>Upload</a>
      </div>
    </div>
    <div className='content'>
      <div className='header'><h2>Finance & Supply Chain - Balance Built</h2></div>
      {page==='vendors'&&<Vendors/>}
      {page==='products'&&<Products/>}
      {page==='warehouses'&&<Warehouses/>}
      {page==='purchase_orders'&&<PurchaseOrders/>}
      {page==='sales_orders'&&<SalesOrders/>}
      {page==='inventory'&&<Inventory/>}
      {page==='finance'&&<Finance/>}
      {page==='reports'&&<Reports/>}
      {page==='upload'&&<Upload/>}
      {page==='search'&&<SearchResults data={searchResults}/>}
      {page==='dashboard'&&<div className='card'><h3>Welcome</h3><p>Use the side nav to open modules or run the seed endpoint to populate sample data.</p></div>}
    </div>
  </div>); }
