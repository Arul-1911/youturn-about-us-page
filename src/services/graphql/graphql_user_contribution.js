import { gql } from "@apollo/client";

export const get_user_contribution_list_query = gql`
  query get_all_user_contribution(
    $language_id: String!
    $page_number: Int
    $page_limit: Int
  ) {
    get_user_contribution_list:get_all_user_contribution(
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        id
        record_type
        user_profile {
          id
          name
        }
        staff_profile {
            id
            name
          }
        title
        subtitle
        content
        reading_time
        perma_link
        language_id
        views
        thumbnail_img
        created_date_time
        published_date_time
        error {
          status_code
          message
        }
      }
    }
  }
`;
 

export const get_user_trending_stories_list_query = gql`
  query get_user_trending_results($language_id: String!) {
    get_user_trending_stories_list:get_user_trending_results(language_id: $language_id) {
      items {
        id
        record_type
        title
        perma_link
        language_id
        thumbnail_img
        created_date_time
        published_date_time
        staff_profile {
          id
          name
        }
        user_profile {
          id
          name
        }
        error {
          status_code
          message
        }
      }
    }
  }
`;

 
export const get_user_contributors_list_query = gql`
  query get_all_user_contributers(
    $page_number: Int
    $page_limit: Int
    $language_id: String
  ) {
    get_user_contributors_list:get_all_user_contributers(
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        user_profile_id
        language_id
        url
        name
        joined_date
        total_work
        total_views
        profile_pic
      }
      error {
        message
      }
      pagination {
        page_number
        page_limit
        total_count
      }
    }
  }
`;