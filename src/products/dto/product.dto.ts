import { ApiProperty } from '@nestjs/swagger';

export class ProductQueryDto {
  @ApiProperty({
    example: 'D',
    description:
      'A aplicação espera receber uma letra das opções A, B, C, D ou E. Caso a letra não seja fornecida, os dados disponíveis serão renderizados.',
  })
  nutrition: string;
  @ApiProperty({
    example: '4',
    description:
      'A aplicação espera receber um número de 1 a 5. Caso o número não seja fornecido, os dados disponíveis serão renderizados.',
  })
  nova: string;
}

export class ProductIdDto {
  @ApiProperty({
    example: '7898024394181',
    description: 'A aplicação espera receber um id para buscar o produto.',
  })
  id: string;
}
