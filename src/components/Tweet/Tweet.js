import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import React from "./React";
import User from "./User";
import { TweetContext, TweetWrapper } from "../style";
import EditTweet from "./EditTweet";

const Tweet = ({ edit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useContext(UserContext);
  const maxLength = 250;
  const [length, setLength] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    setText(user.tweet);
  }, []);

  useEffect(() => {
    setLength(maxLength - text.length);
  }, [text]);
  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };
  const handelEditchange = () => {
    setIsEdit(true);
  };
  const cancleEdit = () => {
    edit(user.tweet_id, text);
    setIsEdit(false);
  };
  const TweetCard = () => (
    <TweetWrapper>
      <User />
      <TweetContext>{user.tweet}</TweetContext>
      <React data={user} editchange={handelEditchange} />
    </TweetWrapper>
  );
  return (
    <>
      {isEdit ? (
        <EditTweet
          valueedit={text}
          length={length}
          change={handleChange}
          id={user.tweet_id}
          editchange={cancleEdit}
        />
      ) : (
        <TweetCard />
      )}
    </>
  );
};
export default Tweet;
