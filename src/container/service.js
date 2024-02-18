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

export default dummyData;

function Views({ views }) {
  // Format views
  let formattedViews = "";
  if (views >= 1000000) {
    formattedViews = (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    formattedViews = (views / 1000).toFixed(1) + "K";
  } else {
    formattedViews = views.toString();
  }
  return formattedViews;
}

function Days({ date }) {
  // Calculate days ago
  // Split the original date string into day, month, and year
  const [day, month, year] = date.split("/");

  const today = new Date();
  const creationDate = new Date(`${year}-${month}-${day}`);
  const differenceInTime = today.getTime() - creationDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  if (differenceInDays === 0) {
    return "Today";
  } else if (differenceInDays === 1) {
    return "Yesterday";
  } else {
    return `${differenceInDays} days ago`;
  }
}

//Calculate words length
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
}

export { Views, Days, truncateText };
