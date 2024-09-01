import { Controller, Param, Get, ParseIntPipe } from "@nestjs/common";

@Controller("book")
export class BookController{
     @Get('/:id')
     getBookById(@Param('id', ParseIntPipe) id: number): string{
        console.log(id, typeof id)
        return "This is get requets"
     }
}

@Controller('class')
export class myController{
   @Get('/attempt')
   attemptClass(): string{
      return "Hello"
   }
}

@Controller('services')
export class newController{
   @Get("new")
   getNew(): Object{
      return {}
   }
}