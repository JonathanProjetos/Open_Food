import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Open_Food API')
    .setDescription(
      'A API Open_Food é uma aplicação que coleta dados do site OpenFoodsFacts. Por meio de seus endpoints, é possível filtrar os dados por nível de nutrição, variando de A a E, e sua pontuação, que varia de 1 a 5. Se nenhum parâmetro for fornecido, todos os dados serão retornados.',
    )
    .setVersion('1.0')
    .addTag('Products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001, () => {
    console.log('Server is running on port 3000');
  });
}
bootstrap();
