import logo from './logo.svg';
import './main.css';
import { Link} from 'react-router-dom';



function Main() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__logo">
          <img src="img/logo.png" alt="Logo" />
          <li className="nav-item"><a className="nav-link" href="#">공공시설</a></li>
        </ul>

        <ul className="navbar__menu">
          <li className="nav-item"><a className="nav-link" href="#">이용안내</a></li>
          <li className="nav-item"><a className="nav-link" href="#">고객센터</a></li>
          <li className="nav-item"><a className="nav-link" href="#">로그인</a></li>
          <li className="nav-item"><a className="nav-link" href="#">회원가입</a></li>
        </ul>

      </nav>

      
      <div className="Card1">
          <div className="c1image">
              <img className="gym" alt="main1" src="img/gym.png" />
          </div>
      </div>

      <div>
          {/* 메인->다른 페이지 링크 추가하기  */}
          <Link to="/p">예약하러 가기</Link>
      </div>

      <div id="footer">
        <p>- 공공시설 예약 시스템 -</p>
      </div>
    </div>
  );
}

export default Main;
