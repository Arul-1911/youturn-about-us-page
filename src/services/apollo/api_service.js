import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { retrieve_item } from "@src/helpers/cryptos";

const BASE_URL ='https://dev.vertace.org/matrimony/api/graphql';


const httpLink = createHttpLink({
  uri: BASE_URL,
});

const authLink = setContext(async (_, { headers }) => {
  // const session_id = retrieve_item("session_id");
  const session_id = "3f20f785-40c2-4521-abb3-1f93a59033f8";


  return {
    headers: {
      ...headers,
      session_id: session_id ? session_id : "",
    },
  };
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: defaultOptions,
});

export async function query_request(query, variables, dispatch) {
  try {
    let response = await client.query({
      query,
      variables,
    });
    let isUnauthorized =
      JSON.stringify(response).indexOf("Not authorized") > -1;
    if (isUnauthorized && dispatch) {
      return "Not authorized";
    }
    return response;
  } catch (e) {
    return { req_error: e };
  }
}
export async function mutate_request(mutation, variables, dispatch) {
  let response = null;
  try {
    response = await client.mutate({
      mutation,
      variables,
    });
    let isUnauthorized =
      JSON.stringify(response).indexOf("Not authorized") > -1;
    if (isUnauthorized && dispatch) {
      return "Not authorized";
    }
    return response;
  } catch (e) {
    return { req_error: e };
  }
}
