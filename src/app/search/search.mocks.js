export const moskRequest = {
  query: '',
  latitude: null,
  longitude: null,
  date: '',
  service_guids: {},
};

export const mockProfCollection = [
  {
    fullName: 'FirstName LastName',
    imageLink:
      'https://images.unsplash.com/photo-1557409835-0e90016730f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    businessName: 'Business Name',
    businessAddress: 'Business Address',
    bookingUrl: 'https://prof.site.com',
    matchedServiceName: 'Matched Service',
    matchedServicePrice: '$100',
    allServicedList: ['service1', 'service2', 'service3'],
    timezone: 10800000,
    availabilities: {
      user_guid: 'some_guid',
      times: [
        new Date('2020-08-24T09:00:00.000-04:00'),
        new Date('2020-08-24T09:00:00.000-05:00'),
        new Date('2020-08-24T09:00:00.000-06:00'),
      ],
      start: null,
      end: null,
    },
  },
];
