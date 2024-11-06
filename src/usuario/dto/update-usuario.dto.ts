import { PartialType } from '@nestjs/mapped-types'; // importar o PartialType para criar um DTO parcial
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
