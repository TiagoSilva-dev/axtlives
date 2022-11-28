import React, { useEffect } from "react";

import { Row, Col } from "antd";

import "./App.css";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Row>
        <Col
          span={6}
          push={18}
          style={{ backgroundColor: "black", height: "100vh" }}
        >
          <iframe
            id="chat_embed"
            src="https://www.twitch.tv/embed/axtlol/chat?darkpopout&parent=tiagosilva-dev.github.io"
            height="98%"
            width="98%"
          />
        </Col>
        <Col
          span={18}
          pull={6}
          style={{ backgroundColor: "black", height: "100vh" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/N05oZ9eYkcE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
