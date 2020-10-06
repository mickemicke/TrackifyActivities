import React from "react";
import Navigation from "../../components/Navigation";
import ColumnWrapper from '../../elements/ColumnWrapper';
import { useStore } from "../../hooks/useStore";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from '../../relay/index';
import Month from '../../components/Month';

function Home() {
  const { state } = useStore();
  const { months, user } = state;
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeQuery($username: String!) {
          activities(username: $username) {
            title
            date
            id
          }
        }
      `}
      variables={{ username: user.username }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <ColumnWrapper>
            {console.log("props", props)}
            <Navigation />
            {months.map((m) => <Month {...m} />)}
          </ColumnWrapper>
        );
      }}
    />
  );
}

export default Home;
