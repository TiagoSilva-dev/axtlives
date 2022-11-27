import React from "react";
import { Row, Col } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Col
          span={6}
          push={18}
          style={{ backgroundColor: "black", height: "100vh", color: "white" }}
        >
          <iframe
            id="chat_embed"
            src="https://www.twitch.tv/embed/casimito/chat?parent=tiagosilva-dev.github.io"
            height="98%"
            width="98%"
          />
        </Col>
        <Col
          span={18}
          pull={6}
          style={{ backgroundColor: "red", height: "100vh", color: "white" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Qv40j3Zckdc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
