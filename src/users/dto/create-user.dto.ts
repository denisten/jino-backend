import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'yourEmail@mail.ru', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: 'password12345', description: 'password' })
  readonly password: string;
}
