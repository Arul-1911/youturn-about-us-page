import { gql } from "@apollo/client";

export const get_slot_list_query=gql`
query get_all_slot($language_id: String!) {
   get_slot_list: get_all_slot(language_id: $language_id) {
      items {
        fact_check {
          id
          user_profile{
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
          likes
          views
          created_date_time
          published_date_time
          thumbnail_img
          perma_link
        }
        article {
          id
          title
          subtitle
          content
          reading_time
          likes
          views
          created_date_time
          published_date_time
          thumbnail_img
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
      }
    }
  }`

  export const get_article_list_query=gql`
  query get_all_article(
    $page_number: Int
    $page_limit: Int
    $json: get_all_article_input
  ) {
    get_article_list:get_all_article(
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
        language_id
        log_count
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
        description
        content
        reading_time
        likes
        views
        comments_count
        created_date_time
        published_date_time
      }
      error {
        status_code
        message
      }
    }
  }`

  export const get_user_contribution_list_query=gql`
  query get_all_user_contribution($language_id: String!) {
    get_user_contribution_list:get_all_user_contribution(language_id: $language_id) {
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
        thumbnail_img
        views
        created_date_time
        published_date_time
      }
    }
  }`

  export const get_top_contributor_list_query=gql`
  query get_all_user_contributers(
    $page_number: Int
    $page_limit: Int
    $language_id: String
  ) {
    get_top_contributor_list:get_all_user_contributers(
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
  }`

  export const get_fact_check_list_query = gql`
  query get_all_fact_check(
    $page_number: Int
    $page_limit: Int
    $json: get_all_fact_check_input
  ) {
    get_fact_check_list  :get_all_fact_check(
      page_number: $page_number
      page_limit: $page_limit
      json: $json
    ) {
      items {
        staff_profile {
          name
        }
        id
        created_date_time
        published_date_time
 
        title
        subtitle
        content
        reading_time
        views
        thumbnail_img
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
 
 
 
export const get_videos_list_query = gql`
  query get_videos_from_channel {
    get_video_list :get_videos_from_channel {
      items {
        title
        published_at
        thumbnails
        views
        days_since_published
        video_id
      }
    }
  }
`;
 
 
export const get_award_query = gql`
  query get_all_award {
    get_award_list: get_all_award {
      items {
        id
        title
        perma_link
        thumbnail_img
        error {
          message
        }
      }
    }
  }
`;
