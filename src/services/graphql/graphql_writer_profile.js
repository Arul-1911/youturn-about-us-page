import { gql } from "@apollo/client";

export const get_writer_details_query = gql`
  query get_all_author_stories(
    $user_profile_id: String
    $staff_profile_id: String
    $language_id: String!
    $page_number: Int
    $page_limit: Int
    $type: String!
  ) {
    get_writer_details: get_all_author_stories(
      user_profile_id: $user_profile_id
      staff_profile_id: $staff_profile_id
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
      type: $type
    ) {
      items {
        id
        staff_profile {
          id
          name
          profile_pic
          about
          url
        }
        user_profile {
          id
          name
          profile_pic
          about
        }
      }
      pagination {
        page_number
        page_limit
        total_count
      }
    }
  }
`;

export const get_writer_dashboard_count_query = gql`
  query get_dashboard_count($language_id: String, $user_id: String) {
    get_writer_dashboard_count: get_dashboard_count(
      language_id: $language_id
      user_id: $user_id
    ) {
      article_count
      fact_check_count
      error {
        status_code
        message
      }
    }
  }
`;

export const get_writer_contribution_list_query = gql`
  query get_all_author_stories(
    $user_profile_id: String
    $staff_profile_id: String
    $language_id: String!
    $page_number: Int
    $page_limit: Int
    $type: String!
  ) {
    get_writer_contribution_list: get_all_author_stories(
      user_profile_id: $user_profile_id
      staff_profile_id: $staff_profile_id
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
      type: $type
    ) {
      items {
        id
        title
        subtitle
        perma_link
        thumbnail_img
        created_date_time
      }
      pagination {
        page_number
        page_limit
        total_count
      }
    }
  }
`;
