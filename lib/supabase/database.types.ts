export type Database = {
  public: {
    Tables: {
      messages: {
        Row: {
          id: number;
          created_at: string;
          content: string;
          is_visible: boolean;
        };
        Insert: {
          id?: number;
          created_at?: string;
          content: string;
          is_visible?: boolean;
        };
        Update: {
          id?: number;
          created_at?: string;
          content?: string;
          is_visible?: boolean;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
