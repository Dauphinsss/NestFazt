import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTask() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    console.log(newTask);
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFiles: UpdateTaskDto) {
    console.log(updatedFiles);
    return this.tasksService.updateTask(id, updatedFiles);
  }
}
