import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

export default Cards;