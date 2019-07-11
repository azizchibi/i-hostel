import React from 'react';

export const HomeConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/',
            component: React.lazy(() => import('../hotel/HotelList'))
        }
    ]
};