import React from "react";
import Navigation from "../../components/Navigation";
import ColumnWrapper from '../../elements/ColumnWrapper';

function Home() {
  return (
    <ColumnWrapper>
      <Navigation />
      <div>Home</div>
    </ColumnWrapper>
  );
}

export default Home;
