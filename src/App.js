import { CommentHeader } from "./Components/CommentHeader";
import { Score } from "./Components/Score";

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
          <div className="comment_replies-container" key={comment.id}>
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={usersData.currentUser}
            />
            <div className="replies_container">
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  currentUser={usersData.currentUser}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <AddComment currentUser={usersData.currentUser} />
    </div>
  );
}

function Comment({ comment, currentUser }) {
  return (
    <div className="comment">
      <Score score={comment.score} />
      <div className="comment_inner">
        <CommentHeader comment={comment} currentUser={currentUser} />
        <p className="comment_text">{comment.content}</p>
      </div>
    </div>
  );
}

function AddComment({currentUser}){
  return <div className="add__comment">
    <div className="add_comment input">
        <img src={currentUser.image.png} alt="profile pic"></img>
        <textarea name="input" className="input_comment" placeholder="Add a comment..."></textarea>
        <button className="send_comment-btn">SEND</button>
      </div>
  </div>
}