import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import Base from "../Base/Base";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import asserts from "../assert";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Days, Views, truncateText } from "../container/service";
import Cards from "../container/Cards";
import Cards3 from "../container/Cards3";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {
  Avatar,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import CommentsCard from "../container/CommentsCard";

//Backend URL
const api_url = asserts.backend_url;

const PlayVideo = () => {
  let { id: currentId } = useParams(); 
  let [loading, setLoading] = useState(true);
  let [video, setVideo] = useState({});
  let [data, setData] = useState([]);
  let [body, setBody] = useState("");
  let [views, setViews] = useState("");
  let [daysAgo, setDaysAgo] = useState("");
  let [userComment, setUserComment] = useState("");
  let [showMore, setShowMore] = useState(false);
  let [showComment, setShowComment] = useState(false);
  let [likes, setLikes] = useState(0);
  let [isLiked, setIsLiked] =useState(false);
  let [isSubscribed,setIsSubscribed]=useState(false)
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  // State to keep track of the previous id
  const [prevId, setPrevId] = useState(currentId);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!token) {
          navigate("/login");
        }
        //Getting Videos
        let videoresponse = await axios.get(`${api_url}/video/get-videos`, {
          headers: {
            "x-auth": token,
          },
        });
        let temp = [];
        videoresponse.data.Video.map((val) => {
          if (val._id == currentId) {
            setVideo(val);
          } else {
            temp.push(val);
          }
        });
        setData([...temp]);
      } catch {
        alert("Invalid Credentials");
        setLoading(false);
      }
    }
    fetchData();

    async function UpdateViews() {
      try {
        if (!token) {
          navigate("/login");
        }
        //Getting Videos
        let videoresponse = await axios.put(`${api_url}/video/update-views`,{id:currentId}, {
          headers: {
            "x-auth": token,
          },
        });
      } catch {
        alert("Invalid Credentials");
        setLoading(false);
      }
    }
    UpdateViews();

    async function addVideotoHistory() {
      try {
        if (!token) {
          navigate("/login");
        }
        //Getting Videos
        let videoresponse = await axios.put(`${api_url}/history/add-history`,{id:currentId}, {
          headers: {
            "x-auth": token,
          },
        });
      } catch {
        alert("Invalid Credentials");
        setLoading(false);
      }
    }
    addVideotoHistory();

    
    setLoading(false);
  }, [currentId]);

  useEffect(() => {
    // Check if the currentId is different from the previous id
    if (currentId !== prevId) {
      // Update the previous id
      setPrevId(currentId);
      // Reload the page when the id changes
      window.location.reload();
    }
  }, [currentId, prevId]);
  useEffect(()=>{
    if (video.date) {
      setBody(video.body);
      setDaysAgo(Days({ date: video.date }));
      setViews(Views({ views: video.views }));
      setLikes(Views({ views: video.likes.length }));
      setVideo(video);
    }
    async function getUser() {
      try {
        if (!token) {
          navigate("/login");
        }
        //Getting Videos
        let response = await axios.get(`${api_url}/auth/get-user-data`, {
          headers: {
            "x-auth": token,
          },
        });
        if(response.data.user.likedVideos.includes(currentId)){
          setIsLiked(true)
        }
        if(response.data.user.subscribing.includes(video.creator)){
          setIsSubscribed(true)
        }
      } catch {
        alert("Invalid Credentials");
        setLoading(false);
      }
    }
    getUser();
  },[video])
  //onClick Show more
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const truncatedDescription = truncateText(body, 300);
  const displayedDescription = showMore ? body : truncatedDescription;

  //onClick Show Comment
  const toggleShowComment = () => {
    setShowComment(!showComment);
  };

  //Function to post comment
  async function postComment() {
    let comment = userComment;
    try {
      let response = await axios.put(`${api_url}/comment/comment/${currentId}`,{comment}, {
        headers: {
          "x-auth": token,
        },
      });
      setUserComment("")
    } catch {
      alert("Can't post comment, try again later");
    }
  }

  //Function to Add Watch later
  async function watchlater() {
    try {
      console.log(currentId)
      let response = await axios.put(`${api_url}/watchlater/add-watchlater`,{id:currentId}, {
        headers: {
          "x-auth": token,
        },
      });
    } catch {
      alert("Can't Add Video to Watch later, try again later");
    }
  }

  //Function to Like Video
  async function likeVideo() {
    try {
      let response = await axios.put(`${api_url}/like/like-video`,{id:currentId}, {
        headers: {
          "x-auth": token,
        },
      });
    } catch {
      alert("Can't like Video, try again later");
    }
  }
  //Function to Like Video
  async function subscribe() {
    try {
      let response = await axios.put(`${api_url}/subscribe/subscribe-channel`,{id:video.creator}, {
        headers: {
          "x-auth": token,
        },
      });
    } catch {
      alert("Can't Subscribe channel, try again later");
    }
  }

  return (
    <Base>
      {loading && (
        <div className="loading-box">
          <CircularProgress />
        </div>
      )}
      {data.length > 0 && video && video.video && (
        <div className="video-player-box">
          {/* Current Video Playing */}
          <span className="youtube-video-container">
            {/* Video and titles */}
            <div className="youtube-video-player">
              {video && video.video && (
                <div className="video-container">
                  <video className="video" controls autoPlay loop>
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="video-details">
                <h2>{video.title}</h2>
                <span className="video-logo">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        bgcolor: "red[500]",
                        marginRight: "8px",
                        border: "1px solid gray",
                        borderRadius: "50px",
                      }}
                      src={video.img}
                      alt={video.title}
                      onClick={() => navigate(`/channel/${video.channelName}`)}
                    />
                    <p>{video.channelName}</p>
                    <button className="subscribe-btn" onClick={subscribe}>
                      {isSubscribed?"Subscribe":"unsubscribe"}
                    </button>
                  </span>
                  <span style={{ display: "flex", gap: "5px" }}>
                    <button className="likes-btn" onClick={likeVideo}>
                      <ThumbUpOffAltIcon sx={{ cursor: "pointer" }} />
                      <Typography
                        variant="subtitle2"
                        style={{
                          marginLeft: "4px",
                          marginRight: "4px",
                          fontSize: "16px",
                        }}
                      >
                        |
                      </Typography>
                      {likes} likes
                    </button>
                    <button className="save-btn" onClick={watchlater}>
                      <PlaylistAddIcon sx={{ cursor: "pointer" }} />
                      Save
                    </button>
                  </span>
                </span>
              </div>
            </div>
            {/* Body of the video */}
            <div className="video-body">
              <p>
                {views}views | {daysAgo}
              </p>
              {displayedDescription}
              <button className="showmore-btn" onClick={toggleShowMore}>
                {showMore ? "Showless" : "more"}
              </button>
            </div>
            {/* Comments */}
            <div className="video-comments">
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Add a Comment
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">Comment: </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="start">
                      <SendIcon
                        onClick={postComment}
                        sx={{ cursor: "pointer" }}
                      />{" "}
                    </InputAdornment>
                  }
                />
              </FormControl>
              <span>
                {showComment && video.comments && video.comments.map((data,key)=>(
                  <CommentsCard data={data} key={key}/>
                ))
                
                }
                <button
                  className="show-comments-btn"
                  onClick={toggleShowComment}
                >
                  {showComment ? "Hide Comments" : "Show Comments"}
                </button>
              </span>
            </div>
          </span>
          {/* Video Suggestions */}
          <span className="video-suggestion-phone">
            {data.map((val, key) => (
              <Cards video={val} key={key} />
            ))}
          </span>
          <span className="video-suggestion-web">
            {data.map((val, key) => (
              <Cards3 video={val} key={key} />
            ))}
          </span>
        </div>
      )}
    </Base>
  );
};

export default PlayVideo;
