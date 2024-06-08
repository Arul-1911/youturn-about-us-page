import { gql } from "@apollo/client";

export const get_featured_article_query = gql`
  query get_all_article(
    $page_number: Int
    $page_limit: Int
    $json: get_all_article_input
  ) {
    get_featured_article: get_all_article(
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
        title
        subtitle
        content
        thumbnail_img
        perma_link
        views
        comments_count
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
      }
      error {
        status_code
        message
      }
    }
  }
`;

export const category_wise_article_list_query = gql`
  query get_all_article(
    $page_number: Int
    $page_limit: Int
    $json: get_all_article_input
  ) {
    get_category_wise_article_list: get_all_article(
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
        thumbnail_img
        is_saved
        title
        perma_link
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
      }
      error {
        status_code
        message
      }
    }
  }
`;

export const get_category_list_query = gql`
  query get_all_category_tag(
    $page_number: Int
    $page_limit: Int
    $language_id: String
  ) {
    get_category_list: get_all_category_tag(
      page_number: $page_number
      page_limit: $page_limit
      language_id: $language_id
    ) {
      items {
        id
        name
      }
    }
  }
`;

export const get_trending_article_list_query = gql`
  query get_trending_articles($language_id: String!) {
    get_trending_article_list: get_trending_articles(
      language_id: $language_id
    ) {
      items {
        id
        title
        perma_link
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
      }
    }
  }
`;

export const get_recommended_story_list_query = gql`
  query get_all_recommended_story($language_id: String!) {
    get_recommended_story_list: get_all_recommended_story(
      language_id: $language_id
    ) {
      items {
        fact_check_id
        fact_check {
          id
          title
          subtitle
          created_date_time
          published_date_time
          thumbnail_img
          perma_link
          content
          reading_time
          views
          staff_profile {
            id
            name
          }
          user_profile {
            id
            name
          }
        }
        article_id
        article {
          id
          title
          subtitle
          created_date_time
          published_date_time
          thumbnail_img
          perma_link
          content
          reading_time
          views
          staff_profile {
            id
            name
          }
          user_profile {
            id
            name
          }
        }
      }
    }
  }
`;
