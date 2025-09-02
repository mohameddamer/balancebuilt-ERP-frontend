import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', timeout:15000 });
export default API;
export async function safeGet(path, fallbackKey){
  try{ const r = await API.get(path); return r.data }catch(e){ console.warn('API error', path, e.message); try{ const s = await import('./data/sampleData.json'); return s.default[fallbackKey] || []; }catch(_){ return []; } }
}
