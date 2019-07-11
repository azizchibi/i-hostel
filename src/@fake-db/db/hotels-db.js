import mock from '../mock';
import { FuseUtils } from '@fuse';
import _ from '@lodash';



const database = {
  hotels: [
        {
            'id': 1,
            'image': '1',
            'title': 'Ex laborum elit commodo officia ipsum magna est culpa tempor veniam reprehenderit.',
            'text': 'Anim eu aliqua amet consectetur sint sint eu aute excepteur in incididunt consequat do ullamco. Anim dolor irure velit culpa ullamco cillum minim elit aliqua sint fugiat consequat cillum occaecat. Occaecat sunt est ad dolore voluptate cillum proident sint eiusmod reprehenderit ex.',
            'prix':200,
            'nbrNuits':0,
            'total':0,
        },
        {
            'id': 2,
            'image': '2',
            'title': 'Ex laborum elit commodo officia ipsum magna est culpa tempor veniam reprehenderit.',
            'text': 'Anim eu aliqua amet consectetur sint sint eu aute excepteur in incididunt consequat do ullamco. Anim dolor irure velit culpa ullamco cillum minim elit aliqua sint fugiat consequat cillum occaecat. Occaecat sunt est ad dolore voluptate cillum proident sint eiusmod reprehenderit ex.',
            'prix':200,
            'nbrNuits':0,
            'total':0,
        },
        {
            'id': 3,
            'image': '3',
            'title': 'Ex laborum elit commodo officia ipsum magna est culpa tempor veniam reprehenderit.',
            'text': 'Anim eu aliqua amet consectetur sint sint eu aute excepteur in incididunt consequat do ullamco. Anim dolor irure velit culpa ullamco cillum minim elit aliqua sint fugiat consequat cillum occaecat. Occaecat sunt est ad dolore voluptate cillum proident sint eiusmod reprehenderit ex.',
            'prix':400,
            'nbrNuits':0,
            'total':0,
        }, 
        {
            'id': 4,
            'image': '4',
            'title': 'Ex laborum elit commodo officia ipsum magna est culpa tempor veniam reprehenderit.',
            'text': 'Anim eu aliqua amet consectetur sint sint eu aute excepteur in incididunt consequat do ullamco. Anim dolor irure velit culpa ullamco cillum minim elit aliqua sint fugiat consequat cillum occaecat. Occaecat sunt est ad dolore voluptate cillum proident sint eiusmod reprehenderit ex.',
            'prix':400,
            'nbrNuits':0,
            'total':0,
        }, 
        {
            'id': 5,
            'image': '5',
            'title': 'Ex laborum elit commodo officia ipsum magna est culpa tempor veniam reprehenderit.',
            'text': 'Anim eu aliqua amet consectetur sint sint eu aute excepteur in incididunt consequat do ullamco. Anim dolor irure velit culpa ullamco cillum minim elit aliqua sint fugiat consequat cillum occaecat. Occaecat sunt est ad dolore voluptate cillum proident sint eiusmod reprehenderit ex.',
            'prix':500,
            'nbrNuits':0,
            'total':0,
        }
    ],
    clients:[

    ]
};


mock.onGet('/api/hotels').reply(() => {
    let response = [];
    response = database.hotels;
    return [200, response];
});
mock.onGet('/api/panier').reply(() => {
    let response = [];

     database.hotels.map(_hotel => {
        if (_hotel.nbrNuits > 0) {
           response.push(_hotel);
        }
    });

    return [200, response];
});

mock.onGet('/api/hotel/').reply((request) => {
    const data = request.params;
    let response = [];
    database.hotels = database.hotels.map(_hotel => {
        if (_hotel.id === data) {
            _hotel.nbrNuits ++;
            _hotel.total=_hotel.nbrNuits*_hotel.prix
        }
        return _hotel;
    });
    database.hotels.map(_hotel => {
        if (_hotel.nbrNuits > 0) {
           response.push(_hotel);
        }
    });

    return [200, response];
});

mock.onPost('/api/clients/save').reply((request) => {
    const data = JSON.parse(request.data);
    let client = null;
     client = data;
     database.clients = [
     ...database.clients,
    client
        ]
    return [200, client];
});