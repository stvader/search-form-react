const transformDataForResult = ({
  full_name,
  cover_image,
  business_name,
  business_address,
  booking_page_url,
  matched_services: { name, price },
  all_services,
  timezone,
  availabilities: { times },
}) => ({
  fullName: full_name,
  imageLink: cover_image,
  businessName: business_name,
  businessAddress: business_address,
  bookingUrl: booking_page_url,
  matchedServiceName: name,
  matchedServicePrice: price,
  allServicedList: all_services,
  timezone,
  availabilities: times,
});

export const transformDataForResultsView = data => data.map(prof => transformDataForResult(prof));
