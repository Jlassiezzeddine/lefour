import axios from 'axios';

// eslint-disable-next-line no-unused-vars
type ReservationPayload = {};
export const postReservation = async (payload: ReservationPayload) => {
  try {
    const { data: response } = await axios.post('/strapi/api/reservations/', {
      data: payload,
    });
    return response;
  } catch (error) {
    console.log('ERROR FROM FNQUERY: ', error);
  }
};
