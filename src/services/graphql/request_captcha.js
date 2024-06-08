import { gql } from "@apollo/client";

export const request_captcha_query = gql`
  query request_captcha {
    request_captcha {
      captcha
      id
      error {
        message
      }
    }
  }
`;

export const request_captcha1_query = gql`
  query request_captcha1 {
    request_captcha1: request_captcha {
      captcha
      id
      error {
        message
      }
    }
  }
`;
