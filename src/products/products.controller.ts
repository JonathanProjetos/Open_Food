import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductQueryDto, ProductIdDto } from './dto/product.dto';
import { Product, ProductDetail } from './model/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiTags('Products')
  @Get()
  productsController(@Query() query: ProductQueryDto): Promise<Product[]> {
    const { nutrition, nova } = query;

    try {
      return this.productsService.getProducts(nutrition, nova);
    } catch (error) {
      console.log(error);
    }
  }

  @ApiTags('Products')
  @Get(':id')
  productController(@Param() params: ProductIdDto): Promise<ProductDetail> {
    const { id } = params;

    try {
      const resolves = this.productsService.getProductById(id);
      return resolves;
    } catch (error) {
      console.log(error);
    }
  }
}
