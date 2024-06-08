import { gql } from "@apollo/client";
export const create_donation_mutation = gql`
  mutation create_donation($amount: Int!, $mobile: String, $address: String) {
    create_donation(amount: $amount, mobile: $mobile, address: $address) {
      status
      order_id
      error {
        status_code
        message
      }
    }
  }
`;
