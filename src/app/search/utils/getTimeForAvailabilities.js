import moment from 'moment';

import { TIME_FORMAT_AVAILABILITIES } from '../search.dateTimeConstants';

export const getTimeForAvailabilities = availability =>
  moment(availability).format(TIME_FORMAT_AVAILABILITIES);
