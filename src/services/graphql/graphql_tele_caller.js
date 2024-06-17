import { gql } from "@apollo/client";

export const get_telecallers_query = gql`
  query getTelecallers($json: get_all_telecaller_input) {
    getTelecallers(json: $json) {
      items {
        id
        name
        mobile
        username
      }
      pagination {
        page_number
        page_limit
        total_count
      }
      error {
        status_code
        message
      }
    }
  }
`;

export const create_telecaller_mutation = gql`
  mutation createTelecaller($json: create_telecaller_input) {
    createTelecaller(json: $json) {
      id
      status
      error {
        status_code
        message
      }
    }
  }
`;

export const delete_telecaller_mutation = gql`
  mutation deleteTelecaller($json: delete_telecaller_input) {
    deleteTelecaller(json: $json) {
      id
      status
      error {
        status_code
        message
      }
    }
  }
`;

export const update_telecaller_mutation = gql`
  mutation updateTelecaller($json: update_telecaller_input) {
    updateTelecaller(json: $json) {
      id
      status
      error {
        message
        status_code
      }
    }
  }
`;
