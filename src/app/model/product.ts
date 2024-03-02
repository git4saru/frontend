export interface Product {
    id?: number; // Optional if the id is generated automatically
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images?: string[] | null; // Optional, as indicated by allowNull: true in the Sequelize model
  }
  