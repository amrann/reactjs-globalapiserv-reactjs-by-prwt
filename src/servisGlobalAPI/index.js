import iniGet from './GET';
import iniPost from './POST';
import iniPut from './PUT';
import iniDelete from './DELETE';

const postNewsBlog = (data2) => iniPost('inidataposts', false, data2)
const putNewsBlog = (data2, id) => iniPut(`inidataposts/${id}`, false, data2)
const getNewsBlog = () => iniGet('inidataposts?_sort=id&_order=desc')
const deleteNewsBlog = (id) => iniDelete(`inidataposts/${id}`)


const GlobalAPI = {
    getNewsBlog,
    putNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default GlobalAPI;

