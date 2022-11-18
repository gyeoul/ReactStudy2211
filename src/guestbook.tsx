import { Avatar, Button, List } from "antd";
import React, { useState } from "react";
import axios from "axios";

type GuestBookItem = {
  key: number,
  title: string,
  content: string,
  username: string,
}
const Guestbook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data,setData] = useState<GuestBookItem[]>([]);


  const fetchGuestbookItems = async () => {
    const { data } = await axios.get("http://localhost:3001/guestbook/items");
    //console.log("results :", data);
    const items:GuestBookItem[] = [];
    for (let i = 0; i < data.length; i++) {
      items.push({
            key: data[i].key,
            title: data[i].title,
            content: data[i].content,
            username: data[i].username
      });
    }
    setData(items);
  };


  return (<><List
    loading={loading}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<>
            <Avatar src="https://joeschmoe.io/api/v1/random" style={{ margin: "auto" }}>
            </Avatar>
            <p>{item.username}</p>
          </>}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
  />

    <Button onClick={async () => {
      setLoading(true);
      await fetchGuestbookItems();
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    }>Reload</Button>
  </>);
};
export default Guestbook;