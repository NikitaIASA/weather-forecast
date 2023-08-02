import { FC } from "react";
import Container from "../Container";

import "./Home.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <Container>
      <h1 className="title">
        Weather <span className="title__bold">ForeCast</span>
      </h1>
    </Container>
  );
};
