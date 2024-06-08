import { gql } from "@apollo/client";

export const get_team_member_list_query=gql`
query get_all_team_member($json: get_all_team_member_input) {
    get_team_member_list:get_all_team_member(json: $json) {
      items {
        id
        name
        role
        social_media_link
        description
        image_url
        type
        order_number
      }
      error {
        message
        status_code
      }
      pagination {
        page_number
        page_limit
        total_count
      }
    }
  }`

  export const get_award_list_query=gql`
  query get_all_award {
    get_award_list: get_all_award {
      items {
        id
        title
        subtitle
        content
        description
        perma_link
        thumbnail_img
        created_date_time
        error {
          message
        }
      }
    }
  }`