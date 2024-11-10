import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { StudentsService } from './students.service';

import { CreateStudentDto } from './create-student.dto';
import { UpdateStudentDto } from './update-student.dto';
import { UpdateStudentPartialDto } from './update-student-partial.dto';
import { Student } from './student.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findListStudents(): Promise<Student[]> {
    const students = await this.studentsService.findListStudents();
    return students;
  }

  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    const student = await this.studentsService.createStudent(createStudentDto);
    return student;
  }

  @Put(':studentId')
  async updateStudent(
    @Param('studentId') studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.studentsService.updateStudent(
      studentId,
      updateStudentDto,
    );
    return student;
  }

  @Patch(':studentId')
  async updateStudentPartial(
    @Param('studentId') studentId: string,
    @Body() updateStudentPartialDto: UpdateStudentPartialDto,
  ): Promise<Student> {
    const student = await this.studentsService.updateStudentPartial(
      studentId,
      updateStudentPartialDto,
    );
    return student;
  }

  @UseGuards(AuthGuard)
  @Get(':studentId')
  async findOneByStudentId(
    @Param('studentId') studentId: string,
  ): Promise<Student> {
    const student = await this.studentsService.findOneByStudentId(studentId);
    return student;
  }

  @UseGuards(AuthGuard)
  @Get(':email')
  async findOneByStudentEmail(@Param('email') email: string): Promise<Student> {
    const student = await this.studentsService.findOneByStudentId(email);
    return student;
  }

  @Delete(':studentId')
  async deleteStudent(@Param('studentId') studentId: string): Promise<void> {
    return await this.studentsService.deleteStudent(studentId);
  }
}
