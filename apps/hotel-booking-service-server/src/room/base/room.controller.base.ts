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
import { RoomService } from "../room.service";
import { RoomCreateInput } from "./RoomCreateInput";
import { Room } from "./Room";
import { RoomFindManyArgs } from "./RoomFindManyArgs";
import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";
import { RoomUpdateInput } from "./RoomUpdateInput";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";

export class RoomControllerBase {
  constructor(protected readonly service: RoomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Room })
  async createRoom(@common.Body() data: RoomCreateInput): Promise<Room> {
    return await this.service.createRoom({
      data: {
        ...data,

        hotel: data.hotel
          ? {
              connect: data.hotel,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Room] })
  @ApiNestedQuery(RoomFindManyArgs)
  async rooms(@common.Req() request: Request): Promise<Room[]> {
    const args = plainToClass(RoomFindManyArgs, request.query);
    return this.service.rooms({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async room(
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Room | null> {
    const result = await this.service.room({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRoom(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() data: RoomUpdateInput
  ): Promise<Room | null> {
    try {
      return await this.service.updateRoom({
        where: params,
        data: {
          ...data,

          hotel: data.hotel
            ? {
                connect: data.hotel,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Room })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRoom(
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Room | null> {
    try {
      return await this.service.deleteRoom({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/reservations")
  @ApiNestedQuery(ReservationFindManyArgs)
  async findReservations(
    @common.Req() request: Request,
    @common.Param() params: RoomWhereUniqueInput
  ): Promise<Reservation[]> {
    const query = plainToClass(ReservationFindManyArgs, request.query);
    const results = await this.service.findReservations(params.id, {
      ...query,
      select: {
        checkInDate: true,
        checkOutDate: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        room: {
          select: {
            id: true,
          },
        },

        status: true,
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

  @common.Post("/:id/reservations")
  async connectReservations(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        connect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reservations")
  async updateReservations(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        set: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reservations")
  async disconnectReservations(
    @common.Param() params: RoomWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        disconnect: body,
      },
    };
    await this.service.updateRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}
