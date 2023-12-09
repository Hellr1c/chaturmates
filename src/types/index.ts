import { Database } from "./supabase";

export type FollowType = Database["public"]["Tables"]["student_followers"]["Row"];

export type StudentType = Database["public"]["Tables"]["students"]["Row"];
export type ProfileType = Database["public"]["Tables"]["profiles"]["Row"];
export type SearchHistoryType = Database["public"]["Tables"]["search_history"]["Row"];

export type GroupType = Database["public"]["Tables"]["groups"]["Row"];
export type GroupMemberType = Database["public"]["Tables"]["group_members"]["Row"];

export type GroupChatUrlType = Database["public"]["Tables"]["group_chat_urls"]["Row"];
export type GroupPostType = Database["public"]["Tables"]["group_posts"]["Row"];
export type GroupCommentType = Database["public"]["Tables"]["group_comments"]["Row"];

export type ThreadType = Database["public"]["Tables"]["threads"]["Row"];
export type ThreadMessageType = Database["public"]["Tables"]["threads_messages"]["Row"];