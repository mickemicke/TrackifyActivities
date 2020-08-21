import { Environment, Network, RecordSource, Store } from "relay-runtime";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function fetchQuery(operation, variables) {
  return fetch(`${API_BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Credentials: "include",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
