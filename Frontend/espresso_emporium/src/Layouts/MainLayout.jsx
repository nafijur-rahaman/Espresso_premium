import React from 'react';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div>
            
            <div className='max-w-[1150px] mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;