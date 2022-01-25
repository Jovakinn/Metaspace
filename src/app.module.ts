import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { join } from 'path';
import { ProductModule } from './product/modules/product.module';
import {ThrottlerModule} from "@nestjs/throttler";
import {UserModule} from "./User/modules/user.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'YOUR_USERNAME',
        password: 'YOUR_PASSWORD',
        database: 'YOUR_DB_NAME',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
      }),
      ThrottlerModule.forRoot({
          ttl: 60,
          limit: 500,
      }),
      ProductModule,
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
