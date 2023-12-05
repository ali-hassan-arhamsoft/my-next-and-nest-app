// src/users/users.controller.ts
import { Controller, Get, InternalServerErrorException } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers() {
    try {
      // Fetch data from an external API (https://fakestoreapi.com/users)
      const response = await fetch('https://fakestoreapi.com/users').then((res) => res.json());
      return response;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching users');
    }
  }
}