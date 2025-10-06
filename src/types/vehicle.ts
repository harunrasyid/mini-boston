export interface IVehicleResponse {
  attributes: {
    bearing: number;
    carriages: []; // TODO
    current_status: string;
    current_stop_sequence: number;
    direction_id: number;
    label: number;
    latitude: number;
    longitude: number;
    occupancy_status: string;
    revenue: string;
    speed: number | null;
    updated_at: string;
  };
  id: string;
  links: {
    self: string;
  };
  relationships: {
    route: {
      data: {
        id: string;
        type: string;
      };
    };
    stop: {
      data: {
        id: string;
        type: string;
      };
    };
    trip: {
      data: {
        id: string;
        type: string;
      };
    };
  };
  type: string;
}

export interface IVehicle {
  attributes: {
    bearing: number;
    carriages: []; // TODO
    current_status: string;
    current_stop_sequence: number;
    direction_id: number;
    label: number;
    latitude: number;
    longitude: number;
    occupancy_status: string;
    revenue: string;
    speed: number | null;
    updated_at: string;
  };
  id: string;
}
