import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import CommentForm from "./CommentForm";
import { selectComments } from "../../store/feedback/selectors";
import { fetchComments } from "../../store/feedback/actions";
import { fetchServices } from "../../store/services/actions";

export default function Feedback() {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchServices());
  }, [dispatch]);
  console.log("comments", comments);
  return (
    <Container>
      <h1
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        We love to hear from you!
      </h1>

      <div
        style={{
          width: "100%",
          height: "70vh",
          backgroundColor: "#E1FFCC",
          marginBottom: "2rem",
          overflow: "scroll",
          border: "1px solid #BCE8BA",
        }}
      >
        {comments.map((comment) => {
          const date = new Date(comment.createdAt);
          const dateString = date.toDateString();

          return (
            <div
              key={comment.id}
              style={{
                border: "2px solid black",
                width: "70%",
                float: "right",
                margin: "1rem",
                borderRadius: "15px",
                padding: ".5rem",
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <p>
                user: {comment.user.name}{" "}
                <span style={{ float: "right" }}>{dateString}</span>
              </p>
              <p style={{ padding: "1rem" }}>{comment.comment}</p>
            </div>
          );
        })}

        <div
          style={{
            border: "2px solid black",
            width: "70%",
            float: "right",
            margin: "1rem",
            borderRadius: "15px",
            padding: ".5rem",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <p>
            Karen <span style={{ float: "right" }}>time</span>
          </p>
          <p>This is great, really amazing!</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <CommentForm />
      </div>
    </Container>
  );
}
