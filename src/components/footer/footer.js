import './footer.css';
import {Col, Image} from "antd";
import { Row } from 'antd';

function FooterSite() {

  return (
      <div className="footer-container">
        <Row>
          <Col span={10}offset={8}>
            <div className="footer-text">
              <h1>JOIN US</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={9}>
            <Image
                preview={false}
                style={{width:80,height:80,marginLeft:20}}
                src={require('../../images/pngegg.png')}
            />

          </Col>
          <Col span={2}>
            <Image
                preview={false}
                style={{width:65,height:65,marginTop:8,marginLeft:20}}
                src={require('../../images/371907300_INSTAGRAM_ICON_1080.png')}
            />
          </Col>
          <Col span={6}>
            <Image
                preview={false}
                style={{width:60,height:60,marginTop:8,marginLeft:20}}
                src={require('../../images/12.png')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <div className="footer-name">
            <h1>TRIPPY BULLS PROJECT 2022 / ALL RIGHTS RESERVED</h1>
            </div>
          </Col>
        </Row>
      </div>
  );
}

export default FooterSite;