localStorage.setItem(
  "data",
  localStorage.getItem("data") ||
    JSON.stringify({
      currentUser: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      comments: [
        {
          id: 1,
          content:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          createdAt: "1 month ago",
          score: 12,
          user: {
            image: {
              png: "./images/avatars/image-amyrobson.png",
              webp: "./images/avatars/image-amyrobson.webp",
            },
            username: "amyrobson",
          },
          replies: [],
        },
        {
          id: 2,
          content:
            "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          createdAt: "2 weeks ago",
          score: 5,
          user: {
            image: {
              png: "./images/avatars/image-maxblagun.png",
              webp: "./images/avatars/image-maxblagun.webp",
            },
            username: "maxblagun",
          },
          replies: [
            {
              id: 3,
              content:
                "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              createdAt: "1 week ago",
              score: 4,
              replyingTo: "maxblagun",
              user: {
                image: {
                  png: "./images/avatars/image-ramsesmiron.png",
                  webp: "./images/avatars/image-ramsesmiron.webp",
                },
                username: "ramsesmiron",
              },
            },
            {
              id: 4,
              content:
                "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
              createdAt: "2 days ago",
              score: 2,
              replyingTo: "ramsesmiron",
              user: {
                image: {
                  png: "./images/avatars/image-juliusomo.png",
                  webp: "./images/avatars/image-juliusomo.webp",
                },
                username: "juliusomo",
              },
            },
          ],
        },
      ],
    })
);
let usersData = JSON.parse(localStorage.getItem("data"));
console.log(usersData);
export default function App() {
  return (
    <div className="comment_section">
      <div className="comments_container">
        {usersData.comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            currentUser={usersData.currentUser}
          />
        ))}
      </div>
    </div>
  );
}

function Comment({ comment, currentUser }) {
  return (
    <div className="comment_replies-container">
      <div className="comment">
        <Score score={comment.score} />
        <CommentText comment={comment} currentUser={currentUser} />
      </div>
      <div className="replies_container"></div>
    </div>
  );
}

function Score({ score }) {
  return (
    <div className="score">
      <button className="plus_btn">
        <svg className="plus_score-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
            fill="#C5C6EF"
          ></path>
        </svg>
      </button>
      <p className="score_number">{score}</p>
      <button className="minus_btn">
        <svg className="minus_score-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
            fill="#C5C6EF"
          ></path>
        </svg>
      </button>
    </div>
  );
}

function CommentText({ comment, currentUser }) {
  return (
    <div className="comment_inner">
      <CommentHeader comment={comment} currentUser={currentUser} />
      <p className="comment_text">hel</p>
    </div>
  );
}

function CommentHeader({ comment, currentUser }) {
  return (
    <div className="comment_inner-header">
      <div className="comment_inner-details">
        <img src={comment.user.image.png} alt="profile pic" />
        <p className="comment_username">hel</p>
        <p className="comment_time">no</p>
      </div>

      <button className="btn reply_btn">
        <svg className="reply-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
            fill="#5357B6"
          ></path>
        </svg>
        Reply
      </button>
    </div>
  );
}
