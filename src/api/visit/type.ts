export type getVisitRes = {
  id: number;
  headline: string;
  title: string;
  restaurant_address: {
    id: number;
    title: string;
    address: string;
  };
  restaurant_time: {
    id: number;
    title: string;
    day_range1: string;
    open_time1: string;
    close_time1: string;
    day_range2: string;
    open_time2: string;
    close_time2: string;
  };
  restaurant_contact: {
    id: number;
    title: string;
    phone_number: string;
    mail: string;
  };
}[];

export type getVisitReq = void;
