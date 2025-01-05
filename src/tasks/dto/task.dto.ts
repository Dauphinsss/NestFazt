import { TaskStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  description: string;
}

export class UpdateTaskDto {
  @IsOptional()
  title?: string;
  @IsOptional()
  description?: string;
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus;
}
