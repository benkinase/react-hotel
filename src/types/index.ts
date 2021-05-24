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
  guest?: number;
  room: number;
  room_item?: IRoom;
  hotel: string;
  no_of_guests: number;
  charges: number;
  paid?: boolean;
  stripe_token?: string;
}

// context state type
export interface RoomContextState {
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
}
// user interface
export interface IUser {
  username: string;
  password: string;
}

// new user interface
export type INewUser = IUser & {
  email: string;
  password2: string;
};
// redux auth state
export interface authState {
  token: string | null;
  isAuth: boolean;
  error?: any;
  loading?: boolean;
}
export type RegisterState = {
  error?: string | null;
  loading?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
};
