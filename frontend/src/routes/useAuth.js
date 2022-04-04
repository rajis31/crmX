import { useState, useEffect } from "react";
import { getCookie } from '../Helpers/Helpers';
import axios from 'axios';
import { generateUrl } from "../Helpers/Helpers";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let session_id = getCookie("session_id");
      if (!session_id) setIsAuth(false);

      try {
        const res = await axios.post( generateUrl("user/check_session_id"),
          { session_id: session_id });

        if (res?.data[0]?.session_id === session_id) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }

      } catch (e) {
        console.log(e);
        setIsAuth(false);
      }

    }

    fetchData();
  }, []);

  return isAuth;
}



export default useAuth;
