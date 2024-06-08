import { gql } from "@apollo/client";

export const get_search_result_list_query=gql`
query get_search_results(
    $search_string: String!
    $type: String
    $page_limit: Int
    $language_id: String!
  ) {
    get_search_result_list:get_search_results(
      search_string: $search_string
      type: $type
      page_limit: $page_limit
      language_id: $language_id
    ) {
      pagination {
        page_number
        page_limit
        total_count
      }
      items {
        id
        record_type
        title
        subtitle
        content
        reading_time
        likes
        views
        thumbnail_img
        created_date_time
        published_date_time
        perma_link
        staff_profile {
          id
          name
        }
        user_profile {
          id
          name
        }
      }
      error {
        status_code
        message
      }
    }
  }`

  export const get_trending_result_list_query=gql`
  query get_trending_results($language_id: String!) {
    get_trending_result_list: get_trending_results(language_id: $language_id) {
      pagination {
        page_number
        page_limit
        total_count
      }
      items {
        id
        record_type
        title
        subtitle
        perma_link
        thumbnail_img
        created_date_time
        published_date_time
        staff_profile {
          id
          name
        }
        user_profile{
            id
            name
        }
      }
    }
  }`

  export const get_recent_fact_check_result_list_query=gql`
  query get_recent_fact_checks(
    $language_id: String!
    $page_number: Int
    $page_limit: Int
  ) {
    get_recent_fact_check_result_list:get_recent_fact_checks(
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
    ) {
      pagination {
        page_number
        page_limit
        total_count
      }
      items {
        id
        title
        subtitle
        content
        reading_time
        likes
        views
        thumbnail_img
        created_date_time
        published_date_time
        perma_link
        staff_profile {
          id
          name
        }
      }
      error {
        message
      }
    }
  }`