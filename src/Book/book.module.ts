import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";


@Module({
  imports: [],
  controllers:[BookController],
  providers:[],
  exports:[]
})
export class BookModule {}

@Module({
  imports:[],
  controllers:[],
  providers:[],
  exports:[],
  
})
export class myModule{}