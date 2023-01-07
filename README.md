# Sensor Data API

This API allows you to create, read, update, and delete sensor records. The sensor records are stored in a JSON file and are identified by a unique ID.

## Endpoints

- `POST /sensors`: Creates a new sensor record. The request body should include the following properties:
    - `name` (string): The name of the sensor.
    - `type` (string): The type of the sensor (e.g. temperature, humidity).
    - `value` (number): The current value of the sensor.

- `GET /sensors`: Gets an array of all sensor records.

- `GET /sensors/:id`: Gets the sensor record with the specified ID.

- `PUT /sensors/:id`: Updates the sensor record with the specified ID. The request body should include the properties that you want to update.

- `DELETE /sensors/:id`: Deletes the sensor record with the specified ID.

## Example usage
```
// Create a new sensor record
fetch('/sensors', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Temperature Sensor',
    type: 'temperature',
    value: 22.5,
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

// Get all sensor records
fetch('/sensors')
  .then(response => response.json())
  .then(sensors => console.log(sensors));

// Get a specific sensor record
fetch(`/sensors/${sensorId}`)
  .then(response => response.json())
  .then(sensorData => console.log(sensorData));

// Update a sensor record
fetch(`/sensors/${sensorId}`, {
  method: 'PUT',
  body: JSON.stringify({
    value: 23.5,
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

// Delete a sensor record
fetch(`/sensors/${sensorId}`, {
  method: 'DELETE',
});

```

## Dependencies

- [Nest.js](https://nestjs.com/)
- [uuid](https://www.npmjs.com/package/uuid)

## License

This project is licensed under the MIT License.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
