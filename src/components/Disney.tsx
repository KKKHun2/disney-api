import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nodisney from "../nodisney.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto;
  margin: auto;
  justify-content: center;
  align-items: center;
  &:hover {
    border-radius: 10px;
    background-color: white;
  }
`;

const Form = styled.div`
  display: block;
`;

const DisneyName = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  font-size: 18px;
  text-decoration: none;
  margin: 5px 0px 20px 0px;
  color: black;
`;

const DisneyImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-left: 50px;
  margin-top: 10px;
`;

interface ICharacter {
  id: number;
  name: string;
  urlImg: string;
}

function Disney({ id, name, urlImg }: ICharacter) {
  return (
    <div>
      <Link to={`/character/${id}`} style={{ textDecoration: "none" }}>
        <Container>
          <Form>
            <DisneyImage src={urlImg ? urlImg : nodisney} alt="profile" />
            <DisneyName>{name}</DisneyName>
          </Form>
        </Container>
      </Link>
    </div>
  );
}

export default Disney;
