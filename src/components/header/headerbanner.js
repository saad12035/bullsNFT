import './headerbanner.css';
import {Row, Col, Image} from 'antd';

function HeaderBanner(){

  return(
      <div className="container">
        <Row>
          <Col span={4}>
            <Image
                preview={false}
                style={{marginLeft:100,marginTop:-100}}
                src={require('../../images/logo_new.png')}
            />
          </Col>
          <Col span={8} offset={7}>
            <div className="header-menu">
              <Row>
                <Col span={6}>
                  <h1>MINT</h1>
                </Col>
                <Col span={6}>
                  <h1>ABOUT</h1>
                </Col>
                <Col span={6}>
                  <h1>ROADMAP</h1>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={5}>
            <Row>
              <Col span={6}>
                <Image
                    style={{width:80,height:80}}
                    src={require('../../images/pngegg.png')}
                />

              </Col>
              <Col span={6}>
                <Image
                    style={{width:65,height:65,marginTop:8}}
                    src={require('../../images/371907300_INSTAGRAM_ICON_1080.png')}
                />
              </Col>
              <Col span={6}>
                <Image
                    style={{width:60,height:60,marginTop:8}}
                    src={require('../../images/12.png')}
                />
              </Col>
            </Row>



          </Col>
        </Row>

      </div>
  );
}

export default HeaderBanner;