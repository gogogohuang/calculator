namespace Data {
  type ODwsvTravelFoodType = {
    ID: string,
    Name: string,
    Address: string,
    Tel: string,
    HostWords: string,
    Price: string,
    OpenHours: string,
    CreditCard: string,
    TravelCard: string,
    TrafficGuidelines: string,
    ParkingLot: string,
    Url: string,
    Email: string,
    BlogUrl: string,
    PetNotice: string,
    Reminder: string,
    FoodMonths: string,
    FoodCapacity: string,
    FoodFeature: string,
    City: string,
    Town: string,
    Coordinate: string,
    PicURL: string,
  }[];

  type DistrictDataType = Record<string, string[]>;
}
