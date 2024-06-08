import { gql } from "@apollo/client";

export const get_article_query = gql`
  query get_article_by_perma_link($perma_link: String!, $language_id: String!) {
    get_article: get_article_by_perma_link(
      perma_link: $perma_link
      language_id: $language_id
    ) {
      id
      staff_profile {
        id
        name
        profile_pic
        url
      }
      user_profile {
        id
        name
        profile_pic
        url
      }
      category_tags {
        id
        name
      }
      title
      subtitle
      perma_link
      is_saved
      description
      content
      reading_time
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
`;

export const related_article_list_query = gql`
  query get_all_article(
    $page_number: Int
    $page_limit: Int
    $json: get_all_article_input
  ) {
    get_related_article_list: get_all_article(
      page_number: $page_number
      page_limit: $page_limit
      json: $json
    ) {
      pagination {
        page_number
        page_limit
        total_count
      }
      items {
        id
        staff_profile {
          id
          name
        }
        user_profile {
          id
          name
        }
        thumbnail_img
        title
        subtitle
        perma_link
        content
        reading_time
        created_date_time
        published_date_time
      }
      error {
        status_code
        message
      }
    }
  }
`;

export const get_recent_article_list_query = gql`
  query get_recent_articles(
    $language_id: String!
    $page_number: Int
    $page_limit: Int
  ) {
    get_recent_article_list: get_recent_articles(
      language_id: $language_id
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        id
        staff_profile {
          id
          name
        }
        user_profile {
          id
          name
        }
        title
        subtitle
        perma_link
        thumbnail_img
        created_date_time
        published_date_time
      }
    }
  }
`;
