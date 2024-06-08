import { gql } from "@apollo/client";

export const get_video_list_query=gql`
query get_videos_from_channel(
    $next_page_token: String
    $page_number: Int
    $page_limit: Int
  ) {
    get_video_list:get_videos_from_channel(
      next_page_token: $next_page_token
      page_number: $page_number
      page_limit: $page_limit
    ) {
      items {
        title
        description
        published_at
        video_id
        thumbnails
        views
        days_since_published
        next_page_token
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