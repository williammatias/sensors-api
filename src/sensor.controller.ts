import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { SensorService } from './sensor.service';

@Controller('sensors')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  async create(@Body() sensorData: any) {
    return this.sensorService.create(sensorData);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.sensorService.get(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() sensorData: any) {
    return this.sensorService.update(id, sensorData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.sensorService.delete(id);
  }
}
