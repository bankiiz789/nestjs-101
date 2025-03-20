import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CreateTodosDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean = false;
}
