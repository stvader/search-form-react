import React from 'react';
import { exact, string, arrayOf, shape, instanceOf } from 'prop-types';
import uuid from 'uuid/v4';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Link,
  Box,
  FormControl,
  InputLabel,
  Fab,
} from '@material-ui/core';

import ServicesList from './ServicesList';

import { getTimeForAvailabilities } from '../../../utils/getTimeForAvailabilities';

import s from './result-card.module.scss';

const ResultCard = ({
  data: {
    fullName,
    imageLink,
    businessName,
    businessAddress,
    bookingUrl,
    matchedServiceName,
    matchedServicePrice,
    allServicedList,
    availabilities,
  },
}) => (
  <Card className={s.wrapper}>
    <CardMedia className={s.cover} image={imageLink} title={`${fullName} image`} />
    <Box className={s.content_wrapper}>
      <CardContent className={s.content}>
        <Box component="div" className={s.matched_service}>
          <Typography component="span" variant="subtitle1">
            {`${matchedServiceName}`}
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography component="span" variant="h6">
            {matchedServicePrice}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="h2">
          {`${fullName} (${businessName})`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
          {businessAddress}
        </Typography>
        <Link href={bookingUrl} target="_blank">
          Website
        </Link>
        <FormControl className={s.all_services_block}>
          <InputLabel
            id="prof-card-all-services-select-label"
            className={s.all_services_select_label}
          >
            All Services
          </InputLabel>
          <ServicesList allServicedList={allServicedList} />
        </FormControl>
      </CardContent>
      <CardActions className={s.actions}>
        {availabilities.map(availability => (
          <Fab key={uuid()} variant="extended" size="small" color="primary" aria-label="add">
            {getTimeForAvailabilities(availability)}
          </Fab>
        ))}
      </CardActions>
    </Box>
  </Card>
);

ResultCard.propTypes = {
  data: exact({
    fullName: string,
    imageLink: string,
    businessName: string,
    businessAddress: string,
    bookingUrl: string,
    matchedServiceName: string,
    matchedServicePrice: string,
    allServicedList: arrayOf(string),
    availabilities: shape({
      user_guid: string,
      times: arrayOf(instanceOf(Date)),
    }),
  }),
};

export default ResultCard;
