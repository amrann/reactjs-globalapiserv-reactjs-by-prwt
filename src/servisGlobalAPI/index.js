import iniGet from './GET';
import iniPost from './POST';

const postNewsBlog = (data2) => iniPost('inidataposts', false, data2)
const getNewsBlog = () => iniGet('inidataposts?_sort=id&_order=desc')

const GlobalAPI = {
    getNewsBlog,
    postNewsBlog
}

export default GlobalAPI;

