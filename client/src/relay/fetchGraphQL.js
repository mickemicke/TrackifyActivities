const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function fetchGraphQL(text, variables) {
  const response = await fetch(`${API_BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Credentials: "include",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
