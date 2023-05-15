export interface Car {
  id: number;
  year: number;
  brand: string;
  model: string;
  mileage: string;
  transmission:string;
  motor:string;
  price:number;
  images: ['image_url0'?,'image_url1'?,'image_url2'?,'image_url3'?,'image_url4'?,];
  isActive:boolean;
}
