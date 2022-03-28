import { getCookie } from '../Helpers/Helpers';
import axios from 'axios';

  async function checksessionID() {
    const session_id = getCookie("session_id");
    const response =   await axios.post("http://localhost:3000/user/check_session_id", 
                       { session_id: session_id});
    
    console.log(response);
    return false;
  }

  export default checksessionID;