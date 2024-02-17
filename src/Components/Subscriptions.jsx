import React, { useEffect, useState } from "react";
import "./Subscriptions.css";
import Base from "../Base/Base";
import axios from "axios";
import asserts from "../assert";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router";

//Backend URL
const api_url = asserts.backend_url;

//Dummy Data
const dummyData = [
  {
    title: "Lorem ipsum dolor sit amet",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-16",
    views: "1000",
    channelName: "Channel 1",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Consectetur adipiscing elit",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-15",
    views: "800",
    channelName: "Channel 2",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Sed do eiusmod tempor incididunt",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-14",
    views: "1200",
    channelName: "Channel 3",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Ut labore et dolore magna aliqua",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-13",
    views: "900",
    channelName: "Channel 4",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Ut enim ad minim veniam",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-12",
    views: "1500",
    channelName: "Channel 5",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Quis nostrud exercitation ullamco",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-11",
    views: "1100",
    channelName: "Channel 6",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Laboris nisi ut aliquip ex ea commodo",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-10",
    views: "950",
    channelName: "Channel 7",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Duis aute irure dolor in reprehenderit",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-09",
    views: "1300",
    channelName: "Channel 8",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Excepteur sint occaecat cupidatat non proident",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-08",
    views: "850",
    channelName: "Channel 9",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Sunt in culpa qui officia deserunt mollit anim",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-07",
    views: "1400",
    channelName: "Channel 10",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Id est laborum et dolorum fuga",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-06",
    views: "1050",
    channelName: "Channel 11",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Hic tenetur a sapiente delectus",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-05",
    views: "1250",
    channelName: "Channel 12",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "At vero eos et accusamus et iusto odio",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-04",
    views: "950",
    channelName: "Channel 13",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Dignissimos ducimus qui blanditiis praesentium",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-03",
    views: "1350",
    channelName: "Channel 14",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Voluptatum deleniti atque corrupti quos",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-02",
    views: "875",
    channelName: "Channel 15",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Dolores et quas molestias excepturi",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-02-01",
    views: "1450",
    channelName: "Channel 16",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Sint occaecati cupiditate non provident",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-01-31",
    views: "1100",
    channelName: "Channel 17",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Similique sunt in culpa qui officia",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-01-30",
    views: "1300",
    channelName: "Channel 18",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Nemo enim ipsam voluptatem quia voluptas",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-01-29",
    views: "925",
    channelName: "Channel 19",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
  {
    title: "Aspernatur aut odit aut fugit",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    date: "2024-01-28",
    views: "1400",
    channelName: "Channel 20",
    video:
      "https://res.cloudinary.com/dhetnxi3h/video/upload/v1708102150/Screencast_from_2024-02-16_21-36-32_qi8vfd.webm",
  },
];

const Subscriptions = () => {
  let [data, setData] = useState([]);
  let [channels, setChannels] = useState([]);
  let [loading, setLoading] = useState(true);

  //Getting Channels
  useEffect(() => {
    async function fetchChannels() {
      try {
        // let token=localStorage.getItem("token");
        let token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2NlMjU5MmM5NDRlNDg3NGFhMTdlZiIsImlhdCI6MTcwODA5OTcwNn0.BA5VjYY5w_B6UjJ-NdswGeg2tkNhhLk5ycx-wyAVV6k";
        let channelresponse = await axios.get(
          `${api_url}/subscribe/get-subscribes`,
          {
            headers: {
              "x-auth": token,
            },
          }
        );
        setChannels(channelresponse.data.subscribes);
      } catch {
        alert("Invalid Credentials");
      }
    }
    fetchChannels();
  }, []);
  //Getting Videos after getting Channels
  useEffect(() => {
    async function fetchVideos() {
      try {
        // let token=localStorage.getItem("token");
        let token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2NlMjU5MmM5NDRlNDg3NGFhMTdlZiIsImlhdCI6MTcwODA5OTcwNn0.BA5VjYY5w_B6UjJ-NdswGeg2tkNhhLk5ycx-wyAVV6k";
        //Getting Videos
        let videoresponse = await axios.get(`${api_url}/video/get-videos`, {
          headers: {
            "x-auth": token,
          },
        });
        let temp = [];
        videoresponse.data.Video.map((val) => {
          if (channels.includes(val._id)) {
            temp.push(val);
          }
        });
        // setData([...temp]);
        setData(dummyData);
      } catch {
        alert("Invalid Credentials");
        setLoading(false);
      }
    }
    fetchVideos();
    setLoading(false);
  }, [channels]);

  return (
    <Base>
      {loading && (
        <div className="loading-box">
          <CircularProgress />
        </div>
      )}
      {!loading && (
        <div className="subcriptin-container">
          {data && data.map((val, ind) => <Cards key={ind} video={val} />)}
        </div>
      )}
    </Base>
  );
};

const Cards = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [daysAgo, setDaysAgo] = useState("");
  const [formattedViews, setFormattedViews] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    // Calculate days ago
    const today = new Date();
    const creationDate = new Date(video.date);
    const differenceInTime = today.getTime() - creationDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays === 0) {
      setDaysAgo("Today");
    } else if (differenceInDays === 1) {
      setDaysAgo("Yesterday");
    } else {
      setDaysAgo(`${differenceInDays} days ago`);
    }

    // Format views
    let formattedViews = "";
    if (video.views >= 1000000) {
      formattedViews = (video.views / 1000000).toFixed(1) + "M";
    } else if (video.views >= 1000) {
      formattedViews = (video.views / 1000).toFixed(1) + "K";
    } else {
      formattedViews = video.views.toString();
    }
    setFormattedViews(formattedViews);
  }, []);

  const handleHoverChange = (hovered) => {
    setIsHovered(hovered);
  };
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <Card
      sx={{width: 345,backgroundColor: 'black',color: 'white' }}
      onMouseEnter={() => handleHoverChange(true)}
      onMouseLeave={() => handleHoverChange(false)}
    >
      <div
        style={{ position: "relative", paddingTop: "56.25%" }}
        onClick={() => navigate(`/play/${video._id}`)}
      >
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          controls={isHovered}
          autoPlay={isHovered}
          loop
          muted={isMuted}
          onClick={toggleMute}
        >
          <source src={video.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ bgcolor: "red[500]", marginRight: "8px" }}
              src={video.img}
              alt={video.title}
              onClick={() => navigate(`/channel/${video.channelName}`)}
            />
            <Typography
              sx={{ fontSize: "[16px]" }}
              onClick={() => navigate(`/play/${video._id}`)}
            >
              {video.title}
            </Typography>
          </div>
        }
        subheader={
          <div>
            <Typography
              variant="subtitle1"
              onClick={() => navigate(`/channel/${video.channelName}`)}
              sx={{color: "white"}}
            >
              {video.channelName}
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle2"
                onClick={() => navigate(`/play/${video._id}`)}
                sx={{color: "white"}}
              >
                {formattedViews} views
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginLeft: "8px", marginRight: "8px" }}
              >
                |
              </Typography>
              <Typography
                variant="subtitle2"
                onClick={() => navigate(`/play/${video._id}`)}
                sx={{color: "white"}}
              >
                {daysAgo}
              </Typography>
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default Subscriptions;
