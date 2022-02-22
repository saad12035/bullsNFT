import "./headerbanner.css";
import { Row, Col, Image } from "antd";

function HeaderBanner() {
  return (
    <div className="container">
      <Row>
        <Col span={4} xs={3} md={4} lg={4}>
          <Image
            preview={false}
            className="checking"
            src={require("../../images/StraightLogo.png")}
          />
        </Col>
        <Col offset={7} xs={0} md={8} lg={8}>
          <div className="header-menu">
            <Row>
              <Col  xs={4} md={6} lg={6}>
                <h1>MINT</h1>
              </Col>
              <Col  xs={5} md={6} lg={6}>
                <h1>ABOUT</h1>
              </Col>
              <Col xs={5} md={6} lg={6}>
                <h1>ROADMAP</h1>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={5} xs={0} md={5} lg={5}>
          <Row>
            <Col span={6} xs={0} md={6} lg={6}>
              <Image
                style={{ width: 80, height: 80 }}
                src={require("../../images/pngegg.png")}
              />
            </Col>
            <Col span={6} xs={0} md={6} lg={6}>
              <Image
                style={{ width: 65, height: 65, marginTop: 8 }}
                src={require("../../images/371907300_INSTAGRAM_ICON_1080.png")}
              />
            </Col>
            <Col span={6} xs={0} md={6} lg={6}>
              <Image
                style={{ width: 60, height: 60, marginTop: 8 }}
                src={require("../../images/12.png")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderBanner;
