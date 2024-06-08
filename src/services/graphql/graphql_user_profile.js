import { gql } from "@apollo/client";

export const get_user_dashboard_count_query = gql`
  query get_dashboard_count($language_id: String, $user_id: String) {
    get_user_dashboard_count: get_dashboard_count(
      language_id: $language_id
      user_id: $user_id
    ) {
      article_count
      fact_check_count
      saved_article_count
      saved_fact_check_count
      error {
        status_code
        message
      }
    }
  }
`;

export const get_user_query = gql`
  query get_user($id: String!) {
    get_user(id: $id) {
      id
      roles {
        id
        name
      }
      user_profile {
        name
        email
        mobile
        profile_pic
        url
        about
      }
    }
  }
`;

export const get_donation_list_query = gql`
  query get_all_donations(
    $page_limit: Int
    $page_number: Int
    $amount: Int
    $user_id: String
  ) {
    get_donation_list: get_all_donations(
      page_limit: $page_limit
      page_number: $page_number
      amount: $amount
      user_id: $user_id
    ) {
      items {
        id
        amount
        created_date_time
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

export const get_claim_list_query = gql`
  query get_all_my_user_claims($json: get_all_user_claim_input) {
    get_claim_list: get_all_my_user_claims(json: $json) {
      items {
        id
        topic
        ref_url
        description
        created_date_time
        status
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

export const get_user_bookmark_list_query = gql`
  query get_user_bookmarks(
    $language_id: String
    $type: String
    $page_number: Int
    $page_limit: Int
  ) {
    get_user_bookmark_list: get_user_bookmarks(
      language_id: $language_id
      type: $type
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        id
        record_type
        title
        subtitle
        content
        reading_time
        perma_link
        views
        thumbnail_img
        created_date_time
        user_profile {
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
    }
  }
`;

export const get_my_fact_check_list_query = gql`
  query get_all_my_fact_check(
    $language_id: String
    $page_limit: Int
    $status: String
  ) {
    get_fact_check_list: get_all_my_fact_check(
      language_id: $language_id
      page_limit: $page_limit
      status: $status
    ) {
      items {
        id
        title
        subtitle
        status
        content
        views
        thumbnail_img
        created_date_time
        perma_link
        user_profile {
          id
          name
        }
        staff_profile {
          id
          name
        }
        is_saved
      }
    }
  }
`;

export const get_my_article_list_query = gql`
  query get_all_my_article(
    $language_id: String
    $page_limit: Int
    $status: String
  ) {
    get_article_list: get_all_my_article(
      language_id: $language_id
      page_limit: $page_limit
      status: $status
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
        status
        perma_link
        content
        reading_time
        views
        thumbnail_img
        created_date_time
        is_saved
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
