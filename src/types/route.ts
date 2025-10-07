export interface IRouteResponse {
  attributes: {
    color: string;
    description: string;
    direction_destinations: [string, string];
    direction_names: [string, string];
    fare_class: string;
    listed_route: boolean;
    long_name: string;
    short_name: string;
    sort_order: number;
    text_color: string;
    type: number;
  };
  id: string;
}
