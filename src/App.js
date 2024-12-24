import { AddComment } from "./Components/AddComment";
import { CommentHeader } from "./Components/CommentHeader";
import { Score } from "./Components/Score";
import { ReplyBtn } from "./Components/ReplyBtn";
import { useState } from "react";
import { EditCommentBtn } from "./Components/UserBtns";
import { OpenDeleteModalBtn } from "./Components/DeleteModal";
import { KeepCommentBtn } from "./KeepCommentBtn";
import { DeleteCommentBtn } from "./Components/UserBtns";
import { DeleteModal } from "./Components/DeleteModal";

let data = {
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
};
// console.log(Data);

//SEP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {
  const [usersData, setUsersData] = useState(data.comments);
  const [addReply, setAddReply] = useState(null);
  const [toDelete, setToDelete] = useState(null);
  const [toEdit, setToEdit] = useState(null);
  const [checkUpdate, setcheckUpdate] = useState(true);

  let updatedContent;

  console.log(usersData);
  return (
    <>
      <div className="comment_section">
        <div className="comments_container">
          {usersData
            .sort((a, b) => b.score - a.score)
            .map((comment) => (
              <div className="comment_replies-container" key={comment.id}>
                <Comment>
                  <Score
                    score={comment.score}
                    onChangeScore={setUsersData}
                    id={comment.id}
                  />

                  <CommentInner>
                    <CommentHeader
                      comment={comment}
                      currentUser={data.currentUser}
                    >
                      {comment.user.username === data.currentUser.username ? (
                        <div className="btns_container">
                          <OpenDeleteModalBtn
                            onDelete={setToDelete}
                            id={comment.id}
                          />
                          <EditCommentBtn
                            onEdit={setToEdit}
                            id={toEdit}
                            currentId={comment.id}
                            newContent={updatedContent}
                            updateComment={setUsersData}
                            checkUpdate={checkUpdate}
                          />
                        </div>
                      ) : (
                        <ReplyBtn onReply={setAddReply} id={comment.id} />
                      )}
                    </CommentHeader>

                    <CommentContent
                      comment={comment}
                      id={toEdit}
                      updatedContent={updatedContent}
                      updateComment={setUsersData}
                      setCheck={setcheckUpdate}
                    />
                  </CommentInner>
                </Comment>

                {addReply === comment.id ? (
                  <AddComment
                    currentUser={data.currentUser}
                    onAddComment={setUsersData}
                    isReply={true}
                    commentId={addReply}
                    onAdded={setAddReply}
                    replyTo={comment.user.username}
                  />
                ) : (
                  ""
                )}

                <RepliesContainer>
                  {comment.replies
                    .sort((a, b) => b.score - a.score)
                    .map((reply) => (
                      <Comment key={reply.id}>
                        <Score
                          score={reply.score}
                          onChangeScore={setUsersData}
                          id={reply.id}
                        />

                        <CommentInner>
                          <CommentHeader
                            comment={reply}
                            currentUser={data.currentUser}
                          >
                            {reply.user.username ===
                            data.currentUser.username ? (
                              <div className="btns_container">
                                <OpenDeleteModalBtn
                                  onDelete={setToDelete}
                                  id={reply.id}
                                />
                                <EditCommentBtn
                                  newContent={updatedContent}
                                  onEdit={setToEdit}
                                  id={toEdit}
                                  currentId={reply.id}
                                  updateComment={setUsersData}
                                  checkUpdate={checkUpdate}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </CommentHeader>

                          <CommentContent
                            username={comment.user.username}
                            comment={reply}
                            id={toEdit}
                            updatedContent={updatedContent}
                            updateComment={setUsersData}
                            isReply={true}
                            setCheck={setcheckUpdate}
                          />
                        </CommentInner>
                      </Comment>
                    ))}
                </RepliesContainer>
              </div>
            ))}
        </div>
        <AddComment
          currentUser={data.currentUser}
          onAddComment={setUsersData}
        />
      </div>
      {toDelete ? (
        <DeleteModal>
          <KeepCommentBtn onCancel={setToDelete} />
          <DeleteCommentBtn
            id={toDelete}
            onDeleteComment={setUsersData}
            closeModal={setToDelete}
          />
        </DeleteModal>
      ) : (
        ""
      )}
    </>
  );
}

//SEP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Comment({ children }) {
  return <div className="comment">{children}</div>;
}

function CommentInner({ children }) {
  return <div className="comment_inner">{children}</div>;
}

function RepliesContainer({ children }) {
  return <div className="replies_container">{children}</div>;
}

function CommentContent({
  comment,
  id,
  isReply = false,
  updateComment,
  username,
  setCheck,
}) {
  let text = comment.content;
  return !(id === comment.id) ? (
    <p className="comment_text">
      {isReply ? <span className="reply_tag"> @ {username} </span> : ""}
      {comment.content}
    </p>
  ) : (
    <textarea
      name="input"
      className="input_comment"
      placeholder="Add a comment..."
      defaultValue={text}
      onChange={(e) => {
        text = e.target.value.trim().length !== 0 ? e.target.value : "" ;
        setCheck(text!== "")
        updateComment((comments) =>
          comments.map((Comment) => {
            if (Comment.id === comment.id) {
              return { ...Comment, content: text };
            } else {
              return {
                ...Comment,
                replies: Comment.replies.map((reply) => {
                  if (reply.id === id) {
                    return { ...reply, content: text };
                  } else {
                    return reply;
                  }
                }),
              };
            }
          })
        );
        // console.log(updatedContent);
      }}
    />
    //   {comment.content}
    // </textarea>
  );
}
