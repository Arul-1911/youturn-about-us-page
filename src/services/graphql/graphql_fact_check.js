import { gql } from "@apollo/client";
export const get_featured_fact_check_query = gql`
  query get_all_fact_check(
    $page_number: Int
    $page_limit: Int
    $json: get_all_fact_check_input
  ) {
    get_featured_fact_check: get_all_fact_check(
      page_number: $page_number
      page_limit: $page_limit
      json: $json
    ) {
      items {
        id
        user_profile_id
        staff_profile {
          name
        }
        title
        subtitle
        content
        spread_news
        short_story
        source
        status
        is_fact
        thumbnail_img
        reading_time
        likes
        views
        comments_count
        created_date_time
        published_date_time
        perma_link
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
  }
`;

export const get_category_tag_list_query = gql`
query get_all_category_tag(
  $page_number: Int
  $page_limit: Int
  $language_id: String
  $search_string: String
) {
  get_category_tag_list:get_all_category_tag(
    page_number: $page_number
    page_limit: $page_limit
    language_id: $language_id
    search_string: $search_string
  ) {
    items {
      id
      name
      language_id
    }
    pagination {
      page_number
      page_limit
      total_count
    }
  }
}
`;

export const get_category_wise_fact_check_list_query = gql`
  query get_all_fact_check(
    $page_number: Int
    $page_limit: Int
    $json: get_all_fact_check_input
  ) {
    get_category_wise_fact_check_list :get_all_fact_check(
      page_number: $page_number
      page_limit: $page_limit
      json: $json
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
        language_id
        thumbnail_img
        created_date_time
        published_date_time
        perma_link
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
  }
`;

export const get_trending_fact_checks_query = gql`
  query get_trending_fact_checks($language_id: String!) {
    get_trending_fact_check_list:get_trending_fact_checks(language_id: $language_id) {
      items {
        id
        user_profile_id
        staff_profile {
          id
          name
        }
        title
        created_date_time
        published_date_time
        thumbnail_img
        perma_link
        error {
          status_code
          message
        }
      }
    }
  }
`;


export const get_party_tag_list_query = gql`
  query get_all_party_tag(
    $page_number: Int
    $page_limit: Int
    $language_id: String
    $search_string: String
  ) {
    get_party_tag_list : get_all_party_tag(
      page_number: $page_number
      page_limit: $page_limit
      language_id: $language_id
      search_string: $search_string
    ) {
      items {
        id
        name
        language_id
        error {
          status_code
          message
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



export const get_party_wise_fact_check_list_query = gql`
  query get_fact_check_query_category(
    $page_number: Int
    $page_limit: Int
    $json: get_all_fact_check_input
  ) {
    get_party_wise_fact_check_list: get_all_fact_check(
      page_number: $page_number
      page_limit: $page_limit
      json: $json
    ) {
      items {
        id
        user_profile_id
        staff_profile {
          id
          name
        }
        title
        perma_link
        subtitle
        content
        thumbnail_img
        reading_time
        likes
        views
        created_date_time
        published_date_time
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
  }
`;
