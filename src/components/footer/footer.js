import "./footer.css";
import { Col, Image } from "antd";
import { Row } from "antd";

function FooterSite() {
  return (
    <div className="footer-container">
      <Row>
        <Col span={10} offset={8} xs={0} md={10} lg={10}>
          <div className="footer-text">
            <h1>JOIN US</h1>
          </div>
        </Col>
        <Col offset={2} xs={20} md={0} lg={0}>
          <div className="footer-text">
            <h1>JOIN US</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={2} offset={9} xs={0} md={2} lg={2}>
          <Image
            preview={false}
            style={{ width: 80, height: 80, marginLeft: 20, marginTop: 0 }}
            src={require("../../images/pngegg.png")}
          />
        </Col>
        <Col span={2} xs={0} md={2} lg={2}>
          <Image
            preview={false}
            style={{ width: 65, height: 65, marginTop: 8, marginLeft: 20 }}
            src={require("../../images/371907300_INSTAGRAM_ICON_1080.png")}
          />
        </Col>
        <Col span={6} xs={0} md={6} lg={6}>
          <Image
            preview={false}
            style={{ width: 60, height: 60, marginTop: 8, marginLeft: 20 }}
            src={require("../../images/12.png")}
          />
        </Col>

        <Col offset={1} xs={6} md={0} lg={0}>
          <Image
            preview={false}
            style={{ width: 80, height: 80, marginLeft: 20 }}
            src={require("../../images/pngegg.png")}
          />
        </Col>
        <Col xs={6} md={0} lg={0}>
          <Image
            preview={false}
            style={{ width: 65, height: 65, marginTop: 8, marginLeft: 20 }}
            src={require("../../images/371907300_INSTAGRAM_ICON_1080.png")}
          />
        </Col>
        <Col xs={6} md={0} lg={0}>
          <Image
            preview={false}
            style={{
              width: 60,
              height: 60,
              marginTop: 8,
              marginLeft: 20,
              marginBottom: 20,
            }}
            src={require("../../images/12.png")}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} xs={0} md={8} lg={8}>
          <div className="footer-name">
            <h1>TRIPPY BULLS PROJECT 2022 / ALL RIGHTS RESERVED</h1>
          </div>
        </Col>
        <Col offset={2} xs={20} md={0} lg={0}>
          <div className="footer-name">
            <h1>TRIPPY BULLS PROJECT 2022 / ALL RIGHTS RESERVED</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FooterSite;
