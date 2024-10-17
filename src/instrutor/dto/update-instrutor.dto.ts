import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrutorDto } from './create-instrutor.dto';

export class UpdateInstrutorDto extends PartialType(CreateInstrutorDto) {}
