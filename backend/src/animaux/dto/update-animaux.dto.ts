import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimauxDto } from './create-animaux.dto';

export class UpdateAnimauxDto extends PartialType(CreateAnimauxDto) {}
