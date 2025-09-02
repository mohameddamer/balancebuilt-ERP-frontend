import React from 'react';
export default function Toolbar({onNew,onEdit,onDelete,searchPlaceholder='Search...', onSearch, filterOptions, onFilter}){
  return (<div className='toolbar'><button className='btn' onClick={onNew}>New</button><button className='btn' onClick={onEdit}>Edit</button><button className='btn' onClick={onDelete}>Delete</button><input className='input' placeholder={searchPlaceholder} onChange={e=>onSearch&&onSearch(e.target.value)} style={{flex:1}}/><select className='input' onChange={e=>onFilter&&onFilter(e.target.value)}>{filterOptions && filterOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}</select></div>)
}
