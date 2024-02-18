import React, { useEffect, useState } from "react";
import "./Channel.css";
import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router";
import asserts from "../assert";
import axios from "axios";
import dummyData from "../container/service";
import { Avatar, Typography } from "@mui/material";
import Cards from "../container/Cards";

//Backend URL
const api_url = asserts.backend_url;

const Channel = () => {
  let id = useParams("id");
  let [data, setData] = useState([]);
  let [channel, setChannel] = useState([]);
  let [loading, setLoading] = useState(true);
  let [isOwner, setIsOwner] = useState(false);
  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  //Getting Channels
  useEffect(() => {
    async function fetchChannels() {
      try {
        if (!token) {
          navigate("/login");
        }
        let response = await axios.get(
          `${api_url}/channel/get-channel/${id.name}`,
          {
            headers: {
              "x-auth": token,
            },
          }
        );
        setChannel(response.data.result.channel);
        setData(response.data.result.Video);
        setIsOwner(response.data.result.isOwner);
        setLoading(false);
      } catch {
        alert("Invalid Credentials");
      }
    }
    fetchChannels();
  }, []);
  return (
    <Base>
      <div className="channel-container">
        {channel && (
          <div className="channel-header">
            <Avatar
              sx={{
                bgcolor: "red[500]",
                marginRight: "8px",
                width: 100,
                height: 100,
              }}
              src={channel.img}
              alt={channel.name}
            />
            <div className="channel-details">
              <Typography sx={{ fontSize: "28px" }}>{channel.name}</Typography>
              {channel.youtuber && (
                <Typography sx={{ fontSize: "18px" }}>
                  {channel.subscribers}subscribers
                </Typography>
              )}
            </div>
          </div>
        )}

        {data && (
          <div className="channel-videos">
            {data.map((val, ind) => (
              <Cards video={val} key={ind} />
            ))}
          </div>
        )}
        {!data && (
          <div className="channel-no-video">
            {!isOwner && (
              <div className="user">
                <img
                  src="https://i1.sndcdn.com/artworks-000221547106-q9j673-t500x500.jpg"
                  alt="no content"
                  className="no-content-img"
                />
                <Typography sx={{ fontSize: "24px" }}>
                  This channel doesn't have any content!
                </Typography>
              </div>
            )}

            {isOwner && (
              <div className="user">
                <img
                  src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg"
                  alt="no content"
                  className="no-content-img"
                />
               <>
               <Typography sx={{ fontSize: "18px" }}>
                  Create Content on any device
                </Typography>
                <Typography sx={{ fontSize: "18px" }}>
                  Upload and record at home or on the go.Everything that you make public will appear here.
                </Typography>
               </>
               <button className="create-btn" onClick={()=>navigate('/post-videos')}>Create</button>
              </div>
            )}
          </div>
        )}
      </div>
    </Base>
  );
};

export default Channel;
