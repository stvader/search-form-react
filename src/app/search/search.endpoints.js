export const BASE_PATH = '/';
export const SEARCH_PATH = '/search';
export const RESULT_PATH = '/results';

const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
export const GOOGLE_MAP_LINK = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
