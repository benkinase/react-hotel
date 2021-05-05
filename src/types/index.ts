// room interface
export interface IRoom {
  id: number;
  name: string;
  room_no: number;
  description: string;
  hotel: string;
  capacity: number;
  price: number;
  room_type: string;
  size: number;
  slug: string | undefined;
  images: any[];
  pets?: boolean;
  promo: boolean;
  is_available: boolean;
  breakfast?: boolean;
  featured?: boolean;
}

// reservation interface
export interface IReservation {
  check_in_date: any;
  checkout_date: any;
  guest: number;
  room: number;
  hotel: string;
  no_of_guests: number;
  charges: number;
  paid: boolean;
}

// context state
export type RoomContextState = {
  rooms: IRoom[];
  sortedRooms: IRoom[];
  featuredRooms: IRoom[];
  isLoading: boolean;
  error: any;
  type: string;
  capacity: number;
  price: number;
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
  breakfast: boolean;
  pets: boolean;
  handleChange?: (e: any) => void;
  getRoomDetails?: (slug: string | undefined) => void;
};
// user interface
export interface IUser {
  username: string;
  password: string;
}

// new user interface
export interface INewUser {
  username: string;
  // first_name?: string;
  // last_name?: string;
  password: string;
  email: string;
  re_password: string;
}
// redux auth state
export interface authState {
  token: string;
  isAuth: boolean;
  error: any;
  loading: boolean;
}
