import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApiMapperService } from './api-mapper.service';
import { UserResponseDto } from './response_dto';
import { routesV1 } from 'src/config/routes.config';

@ApiTags(routesV1.api_mapper.swagger_tag)
@Controller(routesV1.public_version)
export class ApiMapperController {
  constructor(private readonly apiMapperService: ApiMapperService) {}

  @ApiOperation({ summary: 'Auto Mapping api response' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: UserResponseDto,
  })
  @Get(routesV1.api_mapper.auto_mapper)
  autoMapper() {
    const result = this.apiMapperService.getExampleApi();
    return result;
  }

  @ApiOperation({ summary: 'Mapping api response 1' })
  @Get(routesV1.api_mapper.mapper_a)
  mapperA() {
    const result = this.apiMapperService.getExampleApiA();
    return result;
  }

  @ApiOperation({ summary: 'Mapping api response 2' })
  @Get(routesV1.api_mapper.mapper_b)
  mapperB() {
    const result = this.apiMapperService.getExampleApiB();
    return result;
  }
}
