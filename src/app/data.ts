export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export const ROOMS: Room[] = [
  {
    id: 1,
    name: 'Бюджетний двомісний номер',
    description: 'Комфортний та доступний варіант для двох осіб. Номер обладнаний усім необхідним для приємного відпочинку після прогулянок містом.',
    price: 1000,
    image: '/assets/images/rooms/budget.jpg'
  },
  {
    id: 2,
    name: 'Двомісний номер Делюкс',
    description: 'Просторий номер з вишуканим дизайном та панорамним видом на старе місто. Ідеальне поєднання комфорту та розкоші.',
    price: 1200,
    image: '/assets/images/rooms/deluxe.jpg'
  },
  {
    id: 3,
    name: 'Дворівневий люкс (на 4 людей)',
    description: 'Розкішний дворівневий номер, ідеальний для сімейного відпочинку або компанії друзів. Два рівні забезпечують приватність та додатковий простір для комфортного проживання чотирьох осіб.',
    price: 2200,
    image: '/assets/images/rooms/duplex.jpg'
  }
];

export const BOOKING_URL = 'https://www.booking.com/hotel/ua/smotrits-ka-vezha.uk.html?aid=2428387&label=metagha-link-MRUA-hotel-3389804_dev-desktop_los-1_bw-5_dow-Monday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260511_ppt-&sid=fcd1f84e5dbf1af026483a5e213f0567&all_sr_blocks=338980402_116514629_2_0_0&checkin=2026-05-11&checkout=2026-05-12&dest_id=3389804&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=338980402_116514629_2_0_0&hpos=1&matching_block_id=338980402_116514629_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=338980402_116514629_2_0_0__100000&srepoch=1778055026&srpvid=2b51396f15e005c7&type=total&ucfs=1&#_';

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Марія К.',
    rating: 5,
    text: 'Чудовий готель у чарівному місці! Персонал дуже привітний, номер чистий та комфортний. Рекомендую всім!'
  },
  {
    id: 2,
    name: 'Іван П.',
    rating: 5,
    text: 'Неймовірний вид на каньйон! Кожної ночі засинаємо під шум річки. Готель виправдав усі очікування.'
  },
  {
    id: 3,
    name: 'Наталія Г.',
    rating: 5,
    text: 'Хороший готель з гарним обслуговуванням. Дуже задоволена перебуванням, обов\'язково повернуся!'
  },
  {
    id: 4,
    name: 'Олег В.',
    rating: 5,
    text: 'Найкращий вибір для пари! Романтична атмосфера, смачний сніданок, чудовий вид. Обов\'язково повернемось!'
  }
];
