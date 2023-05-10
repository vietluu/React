import { useState, createContext, useEffect, useLayoutEffect } from "react";
import "./App.css";
import moment from "moment";
import StatusBox from "./components/StatusBox";
import Tweet from "./components/Tweet/Tweet";
import { v4 as uuidv4 } from "uuid";
import {localUser} from './common/localUser'
export const UserContext = createContext();
const user = [
  {
    tweet_id: uuidv4(),
    created_by: {
      name: "viet",
      id: "viet_-2401",
      avt: "",
    },
    tweet:
      "30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.",
    timestamp: moment().format("MMMM DD, YYYY, h:mm a")
  },
  {
    tweet_id: uuidv4(),
    created_by: {
      name: "viet",
      id: "viet_-2401",
      avt: "",
    },
    tweet:
      "30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists and aspiring ML. Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",
    timestamp: moment().format("MMMM DD, YYYY, h:mm a")
  },
  {
    tweet_id: uuidv4(),
    created_by: {
      name: "nam",
      id: "nam_401",
      avt: "",
    },
    tweet:
      "30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever!",
    timestamp: moment().format("MMMM DD, YYYY, h:mm a")
  }
];
  
function App() {
  const [data, setData] = useState([]);
  const maxLength = 250;
  const [length, setLength] = useState(0);
  const [text, setText] = useState("");
  const [isCheck, setIscheck] = useState(true);
 
  useEffect(() => {
    setLength(maxLength - text.length);
    if (text.length > 0) {
      setIscheck(false);
    } else {
      setIscheck(true);
    }
  }, [text]);

  useLayoutEffect(() => {
    setData(user);
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      setData([
        ...data,
        {
          tweet_id: uuidv4(),
          created_by: {
            name: localUser.name || 'Anonymous',
            id: localUser.id || "Anonymous",
            avt: localUser.avt || ""
          },
          tweet: text,
          timestamp: moment().format("MMMM DD, YYYY, h:mm a")
        }
      ]);
      setText("");
    }
  };
  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.tweet_id !== id));
  };
  const handleEdit = (tweet_id, text) => {
    const value = [...data];
    const newarr = value.map((item) => {
      if (item.tweet_id === tweet_id) {
        item.tweet = text;
      }
      return item;
    });
    setData(newarr);
  };
  return (
    <div className="App">
      <StatusBox
        isCheck={isCheck}
        value={text}
        length={length}
        change={handleChange}
        submit={hanldeSubmit}
      />
      {data.map((val, index) => {
        const usercontrol = { user: val, delete: handleDelete };
        return (
          <UserContext.Provider key={index} value={usercontrol}>
            <Tweet edit={handleEdit} />
          </UserContext.Provider>
        );
      })}
    </div>
  );
}

export default App;
