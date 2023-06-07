import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchDetail } from "../apis/api";
import nodisney from "../nodisney.jpg";

const Container = styled.div`
  background-color: #192a56;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 150px 0px;
`;
const DisneyImage = styled.img`
  display: flex;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const Li = styled.li`
  background-color: white;
  margin-top: 15px;
  border-radius: 6px;
  font-size: 18px;
  margin-left: 10px;
  height: auto;
  list-style-type: none;
  list-style: none;
`;
const Ul = styled.ul`
  border-radius: 6px;
  font-size: 18px;
  margin-left: 10px;
`;

const Back = styled.h1`
  text-decoration: none;
  color: black;
  font-size: 50px;
`;
const Hr = styled.hr`
  margin-top: 20px;
  margin-bottom: 30px;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
  films: string[];
}

const Detail = () => {
  const { characterId } = useParams() as { characterId: string };
  const { isLoading, data } = useQuery<ICharacter>("Character", () =>
    fetchDetail(characterId)
  );

  return (
    <div>
      <Container>
        <h2>{data?.name}, films</h2>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Back> ← </Back>
        </Link>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <DisneyImage
              src={data?.imageUrl ? data.imageUrl : nodisney}
              alt="profile"
            />
            <Hr />
            <Ul>
              {data?.films.map((film, index) => (
                <Li key={index}>{film}</Li>
              ))}
            </Ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Detail;
