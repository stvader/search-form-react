// this function is temporary
// when I have real API and key I'll rewrite all service for them

const singleData = {
  full_name: 'FirstName LastName',
  guid: 'some_guid',
  cover_image:
    'https://images.unsplash.com/photo-1557409835-0e90016730f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  business_name: 'Business Name',
  business_address: 'Some Address',
  latitude: 0,
  longitude: 0,
  booking_page_url: 'https://pn1.by/',
  matched_services: {
    name: 'Required Service',
    price: '$100',
    guid: 'giud1',
  },
  all_services: ['service1', 'service2', 'service3', 'service4'],
  timezone: 10800000,
  cursor: null,
};

const mockData = Array(10).fill(singleData);

export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export const serviceProf = async (requestData, isError = false) => {
  await timeout(2000);
  if (isError || !requestData) {
    return new Error('my error');
  }

  return mockData;
};

export const serviceAvailabilities = collection =>
  collection.map(prof => ({
    ...prof,
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
  }));
