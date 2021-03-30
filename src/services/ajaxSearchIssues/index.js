import { ajaxWrapper } from '../../helpers/ajaxWrapper';

import {urls} from '../../helpers/constant';

export const getIssues = (search= '') => {
  const url = `${urls.SEARCH_ISSUES}?q=repo:facebook/react+${search}`;
  return ajaxWrapper({
    method: 'GET',
    url,
  });
};
