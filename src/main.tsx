import '@ant-design/v5-patch-for-react-19';
import { createRoot } from 'react-dom/client';
import RootApp from './App.tsx';
import './index.css';

const root = document.getElementById('root')!
createRoot(root).render(<RootApp />)
