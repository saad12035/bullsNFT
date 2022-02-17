import {Image} from 'antd';
import {Row, Col} from 'antd';
import './contentbody.css';
import {useState} from "react";

function ContextBody() {
  const [count, setCount] = useState(0);
  const imagePlus = () => {
    setCount(count + 1);
  }
  const imageMinus = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }

  }
  return (
      <div className='container-body1'>
        <Row>
          <Col span={10} offset={2}>
            <div className="hero-text">
              <h1>WELCOME TO <br/>THE TRIPPY<br/> BULLS PROJECT</h1>
              <Row>
                <Col span={6}>
                  <Image
                      preview={false}
                      style={{width: 50, height: 50, marginTop: 20, marginLeft: 20}}
                      src={require('../../images/minus-4-512.png')}
                      onClick={() => imageMinus()}
                  />
                </Col>
                <Col span={6}>
                  <h2>{count}</h2>
                </Col>
                <Col span={6}>
                  <Image
                      preview={false}
                      style={{width: 50, height: 50, marginTop: 20, marginLeft: 20}}
                      src={require('../../images/plus-4-512.png')}
                      onClick={() => imagePlus()}
                  />
                </Col>
              </Row>
              <div className="button">
              <h1>MINT</h1>
              </div>
              </div>
          </Col>
          <Col span={10} offset={1}>
            <Image
                style={{width: 500, height: 500, marginTop: 50}}
                src={require('../../images/ezgif-1-5d4450b0a4.gif')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={2}>
            <Image
                style={{width: 500, height: 500, marginTop: 50}}
                src={require('../../images/image.png')}
            />
          </Col>
          <Col span={10}>
            <div className="hero-text2">
              <h1>ABOUT</h1>
              <h2>The Trippy Bulls Project is a collection of 7000 unique and colorful Bulls who got lost in the 60s on
                the Polygon Blockchain.</h2>
              <h2>Entering The Trippy Bulls Project means joining a family full of people who loves the hippie culture
                and celebrate the 60s art style. Most characters are fictional, inspired by common people who lived in
                the 60s hippie culture around the world. Each one of these characters have different traits and levels
                of rarity, like eyes, horns, acessories, clothing and all of them have unique names too.</h2>
            </div>
          </Col>

        </Row>
        <Row>

          <Col span={10} offset={2}>
            <div className="hero-text3">
              <h1>ROADMAP</h1>
              <h2 >Phase 1</h2>
              <h3>
                <br/>
                - Sell Out 1000 Trippy Bulls<br/>
                - Giveaways every month<br/>
                - Marketing hire to continue growing the brand.<br/></h3>

              <br/>
              <h2> Phase 2</h2>
              <br/>
              <h3>
                - Complete Sellout<br/>
                - Merch Store for Trippy bulls holders<br/>
                - Custom Illustration Giveaways<br/>
                - Physical NFT merch giveaways</h3>
              <br/>
              <h2> Expansion Phase</h2>
              <br/>
              <h3>
                - Brand Collaborations<br/>
                - Whitelist access to Trippy bull holders on the next project launches<br/></h3>
            </div>
          </Col>
          <Col span={10} offset={1}>
            <Image
                style={{width: 500, height: 500, marginTop: 50}}
                src={require('../../images/collage.png')}
            />
          </Col>
        </Row>
      </div>

  );
}

export default ContextBody;