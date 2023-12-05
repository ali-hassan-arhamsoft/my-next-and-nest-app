// src/products/products.controller.ts
import { Controller, Get, InternalServerErrorException } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  async getProducts() {
    try {
      // Fetch data from an external API (https://fakestoreapi.com/products)
      const response = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
      return response;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching products');
    }
  }
}