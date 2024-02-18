import React, { useEffect, useState } from 'react';
import './Watchlater.css';
import Base from '../Base/Base';
import CircularProgress from "@mui/material/CircularProgress";
import asserts from '../assert';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Cards2 from '../container/Cards2';

//Backend URL
const api_url = asserts.backend_url;

const Watchlater = () => {
  let [video,setVideo]=useState([]);
  let [loading,setLoading]=useState(false);
  let navigate=useNavigate();

  useEffect(() => {
    // fetching data
    let token=localStorage.getItem("token");
    if(!token){
      navigate('/login')
    }
    const fetchdata = async () => {
      try {
        const respons = await axios.get(`${api_url}/watchlater/get-watchlater`, {
          headers: {
            "x-auth": token,
          },
        });
        setVideo(respons.data.video);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <Base>
      {loading && (
        <div className="loading-box">
          <CircularProgress />
        </div>
      )}
      <span className="subscription-header">
      <h2>Your WatchLater Videos</h2>
      </span>
      <div className='watch-later-container'>
      {video && video.length && video.map((data,key)=>(
        <Cards2 video={data} key={key} route={`watchlater/remove-watchlater`}/>
      ))

      }
      </div>
    </Base>
  )
}

export default Watchlater