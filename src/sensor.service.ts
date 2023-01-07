import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SensorService {
  private readonly sensors = [];

  create(sensor: any) {
    const id = uuidv4();
    this.sensors.push({ id, ...sensor });
    fs.writeFileSync('sensors.json', JSON.stringify(this.sensors));
  }

  getAll() {
    return this.sensors;
  }

  get(id: string) {
    return this.sensors.find(sensor => sensor.id === id);
  }

  update(id: string, sensorData: any) {
    const sensor = this.get(id);
    Object.assign(sensor, sensorData);
    fs.writeFileSync('sensors.json', JSON.stringify(this.sensors));
    return sensor;
  }

  delete(id: string) {
    const index = this.sensors.findIndex(sensor => sensor.id === id);
    this.sensors.splice(index, 1);
    fs.writeFileSync('sensors.json', JSON.stringify(this.sensors));
  }
}
