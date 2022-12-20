import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, catchError, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { UserDto } from './auto_mapper_dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { transform } from 'node-json-transform';
import { userProfileTransformRule } from 'src/common/mappings/mapping_profiles/user';
import { ForbiddenException } from '@shared/exceptions';
import { ApiMapperErrorMessage } from './error.message';
import { UserEntity } from './entities/auto_mapper_entity';
import { UserMapEntity } from './entities/mapper_entity/user-mapper.entity';
import {getJsonOrXml} from "@shared/helpers/utils";

@Injectable()
export class ApiMapperService {
  constructor(
    private http: HttpService,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async getExampleApi() {
    const response = this.http
      .get('https://dummyjson.com/users/1')
      .pipe(
        map((response) => {
          const object = getJsonOrXml(response, response.data);
          if (typeof object != 'object')
            throw new ForbiddenException(
              ApiMapperErrorMessage.NOT_FOUND_STRUCTURE,
            );
          return object;
        }),
        map(async (object: any) => {
          const resultAutoMapped = this.mapper.map(object, UserDto, UserEntity);
          const currentMapper = await this.userRepository.createResultMapped(
            resultAutoMapped,
          );
          return currentMapper;
        }),
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          throw new ForbiddenException(ApiMapperErrorMessage.API_NOT_AVAILABLE);
        }),
      );
    return response;
  }

  async getExampleApiA(): Promise<UserEntity | Response | UserMapEntity | any> {
    return this.http
      .get('https://dummyjson.com/users/1')
      .pipe(
        map((response) => {

          const object = getJsonOrXml(response, response.data);
          // const object = getJsonOrXml(response,this.exampleXml())
          if (typeof object != 'object')
            throw new ForbiddenException(ApiMapperErrorMessage.NOT_FOUND_STRUCTURE);
          return object;
        }),
        map((object: any) => {
          return transform(object, userProfileTransformRule, object);
        }),
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          throw new ForbiddenException(ApiMapperErrorMessage.API_NOT_AVAILABLE);
        }),
      );
  }

  async getExampleApiB(): Promise<
    UserEntity | Response | UserMapEntity | Observable<any>
  > {
    const response = this.http
      .get('https://dummyjson.com/users/1')
      .pipe(
        map((response) => {
          const object = getJsonOrXml(response, response.data);
          // const object = getJsonOrXml(response,this.exampleXml())
          if (typeof object != 'object')
            throw new ForbiddenException(
              ApiMapperErrorMessage.NOT_FOUND_STRUCTURE,
            );
          return object;
        }),
        map(async (object: any) => {
          return await this.serialize(object, 'UserMapEntity');
        }),
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          throw new ForbiddenException(ApiMapperErrorMessage.API_NOT_AVAILABLE);
        }),
      );
    return response;
  }

  public async serialize(
    data: any,
    outputType: 'UserMapEntity',
  ): Promise<UserMapEntity> {
    if (outputType === 'UserMapEntity') {
      return new UserMapEntity(data);
    }
  }

  private exampleXml(){
    let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n' +
        '<root>\n' +
        '\t<id>1</id>\n' +
        '\t<firstName>Terry</firstName>\n' +
        '\t<lastName>Medhurst</lastName>\n' +
        '\t<maidenName>Smitham</maidenName>\n' +
        '\t<age>50</age>\n' +
        '\t<gender>male</gender>\n' +
        '\t<email>atuny0@sohu.com</email>\n' +
        '\t<phone>+63 791 675 8914</phone>\n' +
        '\t<username>atuny0</username>\n' +
        '\t<password>9uQFF1Lh</password>\n' +
        '\t<birthDate>2000-12-25</birthDate>\n' +
        '\t<image>https://robohash.org/hicveldicta.png</image>\n' +
        '\t<bloodGroup>A−</bloodGroup>\n' +
        '\t<height>189</height>\n' +
        '\t<weight>75.4</weight>\n' +
        '\t<eyeColor>Green</eyeColor>\n' +
        '\t<hair>\n' +
        '\t\t<color>Black</color>\n' +
        '\t\t<type>Strands</type>\n' +
        '\t</hair>\n' +
        '\t<domain>slashdot.org</domain>\n' +
        '\t<ip>117.29.86.254</ip>\n' +
        '\t<address>\n' +
        '\t\t<address>1745 T Street Southeast</address>\n' +
        '\t\t<city>Washington</city>\n' +
        '\t\t<coordinates>\n' +
        '\t\t\t<lat>38.867033</lat>\n' +
        '\t\t\t<lng>-76.979235</lng>\n' +
        '\t\t</coordinates>\n' +
        '\t\t<postalCode>20020</postalCode>\n' +
        '\t\t<state>DC</state>\n' +
        '\t</address>\n' +
        '\t<macAddress>13:69:BA:56:A3:74</macAddress>\n' +
        '\t<university>Capitol University</university>\n' +
        '\t<bank>\n' +
        '\t\t<cardExpire>06/22</cardExpire>\n' +
        '\t\t<cardNumber>50380955204220685</cardNumber>\n' +
        '\t\t<cardType>maestro</cardType>\n' +
        '\t\t<currency>Peso</currency>\n' +
        '\t\t<iban>NO17 0695 2754 967</iban>\n' +
        '\t</bank>\n' +
        '\t<company>\n' +
        '\t\t<address>\n' +
        '\t\t\t<address>629 Debbie Drive</address>\n' +
        '\t\t\t<city>Nashville</city>\n' +
        '\t\t\t<coordinates>\n' +
        '\t\t\t\t<lat>36.208114</lat>\n' +
        '\t\t\t\t<lng>-86.58621199999999</lng>\n' +
        '\t\t\t</coordinates>\n' +
        '\t\t\t<postalCode>37076</postalCode>\n' +
        '\t\t\t<state>TN</state>\n' +
        '\t\t</address>\n' +
        '\t\t<department>Marketing</department>\n' +
        '\t\t<name>Blanda-O\'Keefe</name>\n' +
        '\t\t<title>Help Desk Operator</title>\n' +
        '\t</company>\n' +
        '\t<ein>20-9487066</ein>\n' +
        '\t<ssn>661-64-2976</ssn>\n' +
        '\t<userAgent>Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24</userAgent>\n' +
        '</root>';
    return xml;
}
}
