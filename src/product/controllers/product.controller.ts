import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ProductService} from "../services/product.service";
import {CreateProductDTO} from "../dto/create-product.dto";
import {Product} from "../entities/product.entity";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('create')
    public async createProduct(@Body() createProductDto: CreateProductDTO): Promise<Product> {
        return await this.productService.createProduct(createProductDto);
    }

    @Get('all')
    public async getProducts(): Promise<Product[]> {
        return await this.productService.getProducts();
    }

    @Get('/:productId')
    public async getProduct(@Param('productId') productId: number): Promise<Product> {
        return await this.productService.getProduct(productId);
    }

    @Patch('/edit/:productId')
    public async editProduct(@Body() createProductDto: CreateProductDTO,
                             @Param('productId') productId: number): Promise<Product> {
        return await this.productService.editProduct(productId, createProductDto);
    }


    @Delete('/delete/:productId')
    public async deleteProduct(@Param('productId') productId: number): Promise<void> {
        await this.productService.deleteProduct(productId);
    }
}
