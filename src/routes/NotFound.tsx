import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>
        <span className='title'>Not Found</span>
      </div>
      <br />
      <span>접근할 수 없는 페이지입니다.</span>
      <br />
      <br />
      <br />
      <Link to='/'>메인 페이지로 이동하기</Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #192a56;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  .icon {
    margin: 0 9px 0 0;
    font-size: 10px
  }
  .title {
    font-size: 40px;
    font-weight: 700;
  }
  a {
    text-decoration:none;
    font-size: 15px;
    color: red;
  }
`;

export default NotFound;