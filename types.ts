import { LucideIcon } from 'lucide-react';

export interface HabitItem {
  id: string;
  text: string;
  description: string;
  icon: LucideIcon;
  type: 'do' | 'dont';
  pairId?: string; // Links a 'dont' to a specific 'do'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}