import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import { CollectionPage } from './pages/CollectionPage';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

const Router = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/trade' element={<Shop/>} />
                <Route path='/sell' element={<CollectionPage/>} />
            </Routes>
        </HashRouter >
    );
};

export default Router;