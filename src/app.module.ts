import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HostelModule } from './hostel/hostel.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-search', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    HostelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
