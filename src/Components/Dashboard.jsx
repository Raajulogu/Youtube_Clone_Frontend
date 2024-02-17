import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Base from "../Base/Base";
import asserts from "../assert";
import axios from "axios";
import Cards from "../container/Cards";

//Backend URL
const api_url = asserts.backend_url;

const Dashboard = () => {
  let data = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Golden_Retriever_puppy_standing.jpg",
      title: "Video Title 1",
      channel: "Channel Name 1",
      date: "2024-02-15",
      view: "1000",
    },
    {
      img: "https://th.bing.com/th/id/R.9003028d7ec6ff58a70a2be15a05ffed?rik=9cLEFO6s9oiGeg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fgolden-retriever-dog-1364426710r9x.jpg&ehk=Z8ZK9mRUJe0rT61EYByfWPUGg1BEToYpGPK3bCz1aTU%3d&risl=&pid=ImgRaw&r=0",
      title: "Video Title 2",
      channel: "Channel Name 2",
      date: "2024-02-14",
      view: "500",
    },
    {
      img: "https://res.cloudinary.com/fwkc-production/image/upload/c_thumb,dpr_3.0,f_auto,g_center,h_430,q_auto,w_768/v1/fwkc-prod/May_1",
      title: "Video Title 3",
      channel: "Channel Name 3",
      date: "2024-02-13",
      view: "800",
    },
    {
      img: "https://th.bing.com/th/id/R.3c32f8fedd3037c096409c2970a04dc0?rik=NNc6BXtcWKBIDA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6Dfmn-jf0tg%2fT4pj-RTBdkI%2fAAAAAAAAAxk%2fPSb_H3gmm8M%2fs320%2fMini%2bGolden%2bRetriever%2bPuppies2.jpg&ehk=8DYvRN9Y95Zd6N7RkZ4hL0UmJD4VwiQiZgd6dsmLya4%3d&risl=&pid=ImgRaw&r=0",
      title: "Video Title 4",
      channel: "Channel Name 4",
      date: "2024-02-13",
      view: "800",
    },
    {
      img: "https://th.bing.com/th/id/OIP.zGizIJjFvB0v8xdxj0kE7wHaHa?rs=1&pid=ImgDetMain",
      title: "Video Title 5",
      channel: "Channel Name 6",
      date: "2024-02-18",
      view: "200",
    },
  ];

  const [video, setVideo] = useState(null);

  useEffect(() => {
    // fetching data
    // const fetchdata = async () => {
    //   try {
    //     // let token = localStorage.getItem("token");
    //     let token =
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2NlMjU5MmM5NDRlNDg3NGFhMTdlZiIsImlhdCI6MTcwODAxNzQ5N30.JwdZgyWLGMcAum-RT7cOW4ZfJIbyYwuqXFKWwnEAGc8";
    //     const respons = await axios.get(${api_url}/video/get-videos, {
    //       headers: {
    //         "x-auth": token,
    //       },
    //     });
    //     console.log(respons);
    //     setVideo(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    setVideo(data);
    // fetchdata();
  }, []);

  return (
    <Base>
      <Cards data={data} />
    </Base>
  );
};

export default Dashboard;