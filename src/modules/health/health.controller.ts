import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  TypeOrmHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { routesV1 } from 'src/config/routes.config';

@ApiTags(routesV1.health.swagger_tag)
@Controller(routesV1.public_version)
export class HealthHttpController {
  constructor(
    private health: HealthCheckService,
    private typeOrm: TypeOrmHealthIndicator,
  ) {}

  @Get(routesV1.health.root)
  @ApiOperation({ summary: 'Check application ' })
  @ApiResponse({ status: HttpStatus.OK })
  @HealthCheck()
  check() {
    return this.health.check([() => this.typeOrm.pingCheck('database')]);
  }
}
