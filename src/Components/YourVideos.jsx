import React, { useEffect, useState } from "react";
import "./YourVideos.css";
import Base from "../Base/Base.jsx";
import dummyData, { Views, truncateText } from "../container/service.js";
import asserts from "../assert.js";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

//Backend URL
const api_url = asserts.backend_url;
let dummyBody = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum nec semper mauris. Nullam malesuada, mauris nec laoreet congue,
  justo quam consectetur sapien, nec rhoncus est libero eu metus. Duis auctor,
  leo at aliquam placerat, massa lectus sodales dui, eget consectetur lacus tortor
  ut libero. Sed sagittis tincidunt est, vitae ullamcorper tortor hendrerit et.
  Nullam suscipit, ligula nec fermentum commodo, dui libero condimentum velit,
  eget congue nulla arcu a lectus. Vivamus bibendum consequat nisi id scelerisque.
  Curabitur sagittis tellus id ultrices dictum. Nullam condimentum magna vel enim faucibus,
  sit amet finibus nisi rhoncus. Vivamus ut lorem vitae lorem venenatis fringilla non ut ante.
  Duis elementum, est et varius consequat, nisi sapien gravida tortor, at tempor justo velit et ligula.
  Etiam vel justo vel sapien scelerisque accumsan.Phasellus accumsan ut ligula vel cursus.
  Fusce euismod efficitur nunc. Praesent ac ex eget risus tincidunt hendrerit. Suspendisse
  potenti. Phasellus commodo libero non justo pulvinar, vitae dictum nulla consectetur.
  Mauris hendrerit fermentum nibh, nec luctus leo placerat quis. Phasellus ac elit at
  sapien eleifend ultricies nec ut quam. Vestibulum lobortis risus vitae nisi volutpat,
  in mattis sapien eleifend. Integer malesuada eros quis eros gravida, nec consequat
  lacus sollicitudin. Suspendisse at leo sapien. Vivamus dapibus lacus magna,
  et egestas enim venenatis ut. Suspendisse potenti. Maecenas auctor blandit
  odio id sodales.

`;

const YourVideos = () => {
  let [videos, setVideos] = useState([]);
  let [loading, setLoading] = useState(true);
  let token=localStorage.getItem('token');
  let navigate=useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const respons = await axios.get(`${api_url}/video/get-video-byId`, {
          headers: {
            "x-auth": token,
          },
        });
        console.log(respons);
        setVideos(dummyData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <Base>
     <div className="yourvideos-container">
      <Button variant="contained" onClick={()=>navigate('/post-videos')}>Upload New Video</Button>
     
     </div>
    </Base>
  );
};


export default YourVideos;
