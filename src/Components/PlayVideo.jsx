import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import Base from "../Base/Base";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import asserts from "../assert";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import dummyData from "../container/service";

//Backend URL
const api_url = asserts.backend_url;

const PlayVideo = () => {
  let id = useParams("id");
  let [loading, setLoading] = useState(true);
  let [video, setVideo] = useState({});
  let [data, setData] = useState([]);
  let navigate=useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        let token=localStorage.getItem("token");
        if(!token) {
          navigate('/login')
        }
        //Getting Videos
        let videoresponse = await axios.get(`${api_url}/video/get-videos`, {
          headers: {
            "x-auth": token,
          },
        });
        let temp=[];
        videoresponse.data.Video.map((val) => {
          if (val._id==id) {
            setVideo(val);
          }
        });
        setData([...temp]);
        setData(dummyData);
        setVideo(dummyData[0]);
      } catch {
        alert("Invalid Credentials");
        setLoading(false);
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  return (
    <Base>
      {loading && (
        <div className="loading-box">
          <CircularProgress />
        </div>
      )}
      {data.length>0 && video && video.video && (
        <div className="youtube-video-player">
          <div className="video-container">
            <video
              style={{ width: "100%", height: "100%" }}
              controls
              autoPlay
              loop
            >
              <source src={video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {console.log(video)}
          </div>
          <div className="video-details">
            <h2>{video.title}</h2>
            <p>Channel: {video.channelName}</p>
            <p>Views: {video.views}</p>
          </div>
        </div>
      )}
    </Base>
  );
};

export default PlayVideo;
