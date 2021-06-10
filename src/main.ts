import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@127.0.0.1:5672/cantino'],
      noAck: false,
      queue: 'nestjs-search',
    },
  });
  await app.listen(() => logger.log('Search Microservice listening...'));
}
bootstrap();
