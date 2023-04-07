import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
var cors = require('cors')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions ={
    origin:'http://localhost:3002', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        return new BadRequestException(errors);
      },
      validationError: {
        target: false,
        value: false,
      },
    }),
  );


  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(process.env.API_PORT);
}
bootstrap();
