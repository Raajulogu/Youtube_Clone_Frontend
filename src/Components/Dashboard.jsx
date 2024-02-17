import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Base from "../Base/Base";
import asserts from "../assert";
import axios from "axios";
import Cards from "../container/Cards";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
import dummyData from "../container/service";

//Backend URL
const api_url = asserts.backend_url;

const Dashboard = () => {
  let [video, setVideo] = useState([]);
  let [loading, setLoading] = useState(true);
  let navigate=useNavigate();

  useEffect(() => {
    // fetching data
    let token=localStorage.getItem("token");
    if(!token){
      navigate('/login')
    }
    const fetchdata = async () => {
      try {
        const respons = await axios.get(`${api_url}/video/get-videos`, {
          headers: {
            "x-auth": token,
          },
        });
        console.log(respons);
        setVideo(dummyData);
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
      {!loading && (
        <div className="dashboard-container">
          {video && video.map((val, ind) => <Cards key={ind} video={val} />)}
        </div>
      )}
    </Base>
  );
};

export default Dashboard;
