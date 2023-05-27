export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          bio: string | null
          created_at: string | null
          display_name: string | null
          gender: string | null
          id: number
          is_private: boolean | null
          profile_photo: string | null
          updated_at: string | null
          username: string
          website: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          display_name?: string | null
          gender?: string | null
          id?: number
          is_private?: boolean | null
          profile_photo?: string | null
          updated_at?: string | null
          username: string
          website?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          display_name?: string | null
          gender?: string | null
          id?: number
          is_private?: boolean | null
          profile_photo?: string | null
          updated_at?: string | null
          username?: string
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
