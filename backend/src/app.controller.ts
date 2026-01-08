import { Controller, Get } from '@nestjs/common';
import { Bear, getBears } from './wiki';

@Controller()
export class AppController {
  @Get('bears')
  async getBears(): Promise<Bear[]> {
    return getBears();
  }
}
