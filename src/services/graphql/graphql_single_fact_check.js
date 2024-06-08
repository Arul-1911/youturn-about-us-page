import { gql } from "@apollo/client";

export const get_fact_check_query=gql`
query get_fact_check_by_perma_link(
    $perma_link: String!
    $language_id: String!
  ) {
   get_fact_check:get_fact_check_by_perma_link(
      perma_link: $perma_link
      language_id: $language_id
    ) {
      id
      is_fact
      status
      reading_time
      views
      likes
      thumbnail_img
      created_date_time
      published_date_time
      is_saved
      user_profile {
        id
        name
        profile_pic
        url
      }
      staff_profile {
        id
        name
        url
        profile_pic
      }
      category_tags {
        name
        id
      }
      title
      subtitle
      content
      spread_news
      error {
        message
        status_code
      }
    }
  }`

  export const get_related_fact_check_list_query=gql`
  query get_all_fact_check(
    $page_number: Int
    $page_limit: Int
    $json: get_all_fact_check_input
  ) {
    get_related_fact_check_list: get_all_fact_check(
      page_number: $page_number
      page_limit: $page_limit
      json: $json
    ) {
      items {
        id
        created_date_time
        thumbnail_img
        perma_link
        title
        subtitle
        staff_profile {
          name
        }
      }
      pagination {
        page_number
        page_limit
        total_count
      }
      error {
        message
      }
    }
  }`

  export const get_recent_fact_check_list_query=gql`
  query get_recent_fact_checks(
    $language_id: String!
    $page_number: Int
    $page_limit: Int
  ) {
    get_recent_fact_check_list: get_recent_fact_checks(
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        id
        language_id
        title
        subtitle
        thumbnail_img
        reading_time
        created_date_time
        perma_link
        user_profile{
            id
            name
        }
        staff_profile {
            id
          name
        }
      }
      pagination {
        page_number
        page_limit
        total_count
      }
      error {
        message
      }
    }
  }`

  export const get_fact_check_comment_list_query=gql`
  query get_all_parent_comments(
    $fact_check_id: String
    $page_number: Int
    $page_limit: Int
  ) {
    get_fact_check_comment_list:get_all_parent_comments(
      fact_check_id: $fact_check_id
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        id
        fact_check_id
        article_id
        content
        replies_count
        parent_comment_id
        created_date_time
        child_comments {
          id
          article_id
          content
          commented_by {
            last_login_datetime
          }
        }
        commented_by {
            id
          user_profile {
            name
            profile_pic
          }
        }
        error {
          message
        }
      }
    }
  }`