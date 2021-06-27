import { ClientModel } from './client';
import { BrandModel } from "./brand";
export class CarModel {
  id: number;
  owner: ClientModel;
  name: string;
  brand: BrandModel;
  year: number;
}
