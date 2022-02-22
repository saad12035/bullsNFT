import { Layout } from 'antd';
import HeaderBanner from "../../components/header/headerbanner";
import './homepage.css';
import ContextBody from "../../components/contentbody/contentbody";
import FooterSite from "../../components/footer/footer";

const { Header, Footer, Content } = Layout;
function Home(){
  return(
      <Layout>
        <div className="test">
          <Header style={{ position: 'sticky', margin:'0', width: '100%',backgroundColor:"black" }}><HeaderBanner/></Header>
          <Content><ContextBody/></Content>
          <Footer style={{backgroundColor:"black"}}><FooterSite/></Footer>
        </div>
      </Layout>
  );
}

export default Home;