import { Client } from 'node-rest-client-promise';

/**
 * Map results
 * @param  {String} endpoint API endpint
 * @param {Object} mapper Calculation functions
 * @param {Object} logger Logging function
 */
const crawl = async (endpoint, mapper) => {
  let result = [];
  const client = new Client();
  const getPage = (url = endpoint) => client.getPromise(url)
    .then(async (p) => {
      result = result.concat(mapper(p.data.results));

      // go through next parameter, because there is not provided information about total pages or results per page
      if (p.data.next !== null) {
        await getPage(p.data.next);
      }
    })
    .catch((err) => {
      result.unshift('An error occured. Result is incomplete.');
      throw err;
    });
  await getPage();
  return result;
};

export default crawl;
