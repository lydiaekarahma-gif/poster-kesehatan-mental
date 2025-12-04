import { 
  HeartCrack, 
  MessageCircleHeart, 
  BatteryWarning, 
  BatteryCharging, 
  Scale, 
  Sparkles, 
  ClockAlert, 
  Utensils 
} from 'lucide-react';
import { HabitItem } from './types';

export const HABITS: HabitItem[] = [
  // DON'TS (Negative / Left Side)
  {
    id: 'dont-1',
    text: 'Memendam perasaan sendirian',
    description: 'Menyimpan emosi negatif dapat meningkatkan stres dan kecemasan jangka panjang.',
    icon: HeartCrack,
    type: 'dont',
    pairId: 'do-1'
  },
  {
    id: 'dont-2',
    text: 'Terlalu keras pada diri sendiri',
    description: 'Perfeksionisme berlebihan seringkali berujung pada kelelahan mental (burnout).',
    icon: BatteryWarning,
    type: 'dont',
    pairId: 'do-2'
  },
  {
    id: 'dont-3',
    text: 'Membandingkan diri dengan orang lain',
    description: 'Setiap orang memiliki garis waktunya sendiri. Fokus pada prosesmu, bukan hasil orang lain.',
    icon: Scale,
    type: 'dont',
    pairId: 'do-3'
  },
  {
    id: 'dont-4',
    text: 'Menumpuk tugas tanpa jadwal',
    description: 'Prokrastinasi dan manajemen waktu yang buruk menciptakan tekanan yang tidak perlu.',
    icon: ClockAlert,
    type: 'dont',
    pairId: 'do-4'
  },

  // DOS (Positive / Right Side)
  {
    id: 'do-1',
    text: 'Ceritakan perasaanmu',
    description: 'Berbagi cerita dengan orang terpercaya bisa meringankan beban pikiranmu secara signifikan.',
    icon: MessageCircleHeart,
    type: 'do',
    pairId: 'dont-1'
  },
  {
    id: 'do-2',
    text: 'Jaga pola tidur yang cukup',
    description: 'Tidur adalah fondasi kesehatan mental. Istirahat yang cukup memperbaiki mood dan fokus.',
    icon: BatteryCharging,
    type: 'do',
    pairId: 'dont-2'
  },
  {
    id: 'do-3',
    text: 'Lakukan aktivitas yang kamu suka',
    description: 'Hobi dan kesenangan kecil melepaskan dopamin yang penting untuk kebahagiaan.',
    icon: Sparkles,
    type: 'do',
    pairId: 'dont-3'
  },
  {
    id: 'do-4',
    text: 'Makan teratur dan tetap hidrasi',
    description: 'Nutrisi yang baik berpengaruh langsung pada kerja otak dan stabilitas emosi.',
    icon: Utensils,
    type: 'do',
    pairId: 'dont-4'
  }
];