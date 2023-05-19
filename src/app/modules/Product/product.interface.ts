export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  sku: string;
}
