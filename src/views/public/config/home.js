import { requester } from 'services';
import { URI_FOR_GETTING_POKEMOS } from 'config/endpoints';

export default {
  getData: () => requester.get(
    URI_FOR_GETTING_POKEMOS,
  ),
};