import Disney from "../components/Disney";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCharacter } from "../apis/api";

const Container = styled.div`
  background-color: #192a56;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 70px;
  margin-top: 50px;
`;
const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px;
`;
interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

const Home = () => {
  const { isLoading, data } = useQuery<ICharacter[]>(
    "allCaracter",
    fetchCharacter
  );

  return (
    <div>
      <Container>
        <Title>Disney characters</Title>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <Body>
              {data?.slice(0, 52).map((disney, idx) => (
                <Disney
                  id={disney?.id}
                  key={disney?.id}
                  name={disney?.name}
                  urlImg={disney?.imageUrl}
                />
              ))}
            </Body>
          </div>
        )}

        <hr />
      </Container>
    </div>
  );
};

export default Home;
