import { PartialType } from '@nestjs/swagger';
import { PessoaUpdateIntersectionDto } from './pessoa-update-intersection.dto';

export class PessoaUpdateDto extends PartialType(PessoaUpdateIntersectionDto) {}
