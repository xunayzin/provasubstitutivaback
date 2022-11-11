import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'nome',
    example: 'Mohammed',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'email',
    example: 'seuuser@email.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'O título do jogo',
    example: 'God Of War',
  })
  password: string;

}
