/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HotelService } from "../hotel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HotelCreateInput } from "./HotelCreateInput";
import { Hotel } from "./Hotel";
import { HotelFindManyArgs } from "./HotelFindManyArgs";
import { HotelWhereUniqueInput } from "./HotelWhereUniqueInput";
import { HotelUpdateInput } from "./HotelUpdateInput";
import { FeedbackFindManyArgs } from "../../feedback/base/FeedbackFindManyArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HotelControllerBase {
  constructor(
    protected readonly service: HotelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hotel })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHotel(@common.Body() data: HotelCreateInput): Promise<Hotel> {
    return await this.service.createHotel({
      data: data,
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        rating: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Hotel] })
  @ApiNestedQuery(HotelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hotels(@common.Req() request: Request): Promise<Hotel[]> {
    const args = plainToClass(HotelFindManyArgs, request.query);
    return this.service.hotels({
      ...args,
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        rating: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hotel(
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Hotel | null> {
    const result = await this.service.hotel({
      where: params,
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        rating: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHotel(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() data: HotelUpdateInput
  ): Promise<Hotel | null> {
    try {
      return await this.service.updateHotel({
        where: params,
        data: data,
        select: {
          address: true,
          city: true,
          country: true,
          createdAt: true,
          id: true,
          name: true,
          rating: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHotel(
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Hotel | null> {
    try {
      return await this.service.deleteHotel({
        where: params,
        select: {
          address: true,
          city: true,
          country: true,
          createdAt: true,
          id: true,
          name: true,
          rating: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/feedbacks")
  @ApiNestedQuery(FeedbackFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async findFeedbacks(
    @common.Req() request: Request,
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Feedback[]> {
    const query = plainToClass(FeedbackFindManyArgs, request.query);
    const results = await this.service.findFeedbacks(params.id, {
      ...query,
      select: {
        comment: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        hotel: {
          select: {
            id: true,
          },
        },

        id: true,
        rating: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  async connectFeedbacks(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        connect: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  async updateFeedbacks(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        set: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  async disconnectFeedbacks(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        disconnect: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/rooms")
  @ApiNestedQuery(RoomFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  async findRooms(
    @common.Req() request: Request,
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Room[]> {
    const query = plainToClass(RoomFindManyArgs, request.query);
    const results = await this.service.findRooms(params.id, {
      ...query,
      select: {
        createdAt: true,

        hotel: {
          select: {
            id: true,
          },
        },

        id: true,
        numberField: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rooms")
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  async connectRooms(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        connect: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rooms")
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  async updateRooms(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        set: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rooms")
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "update",
    possession: "any",
  })
  async disconnectRooms(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        disconnect: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
