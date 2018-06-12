import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3001';

const handlePromiseError = error => console.log(`Error: ${error}`);


const processApiResponse = ({ response, successCode, errorMessage }) => ({
  data: response.data,
  error: response.status === successCode ? null : errorMessage,
});

export const getUserFromData = () =>
  axios
    .get('/api/heroes')
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while fetching',
      }),
    )
    .catch(handlePromiseError);

export const getDataFromSquad = () =>
      axios
        .get('/api/squads')
        .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while fetching',
      }),
      )
.catch(handlePromiseError);


export const getDataFromSquads = () =>
  axios
    .get('/api/squads')
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while fetching',
      }),
    )
    .catch(handlePromiseError);

export const addNewHero = hero =>
  axios
    .post('/api/heroes', hero)
    .then(response =>
      processApiResponse({
        response,
        successCode: 201,
        errorMessage: 'Error while adding',
      }),
    )
    .catch(handlePromiseError);

export const deleteHero = id =>
  axios
    .delete(`/api/heroes/${id}`)
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while deleting',
      }),
    )
    .catch(handlePromiseError);

export const deleteSquad = id =>
  axios
    .delete(`/api/squads/${id}`)
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while deleting',
      }),
    )
    .catch(handlePromiseError);



export const AddToSquad = hero =>
  axios
    .post('/api/squads', hero)
    .then(response =>
      processApiResponse({
        response,
        successCode: 201,
        errorMessage: 'Error while adding',
      }),
    )
    .catch(handlePromiseError);
