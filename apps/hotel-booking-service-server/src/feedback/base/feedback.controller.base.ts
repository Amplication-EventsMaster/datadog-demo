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
import { FeedbackService } from "../feedback.service";
import { FeedbackCreateInput } from "./FeedbackCreateInput";
import { Feedback } from "./Feedback";
import { FeedbackFindManyArgs } from "./FeedbackFindManyArgs";
import { FeedbackWhereUniqueInput } from "./FeedbackWhereUniqueInput";
import { FeedbackUpdateInput } from "./FeedbackUpdateInput";

export class FeedbackControllerBase {
  constructor(protected readonly service: FeedbackService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Feedback })
  async createFeedback(
    @common.Body() data: FeedbackCreateInput
  ): Promise<Feedback> {
    return await this.service.createFeedback({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        hotel: data.hotel
          ? {
              connect: data.hotel,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Feedback] })
  @ApiNestedQuery(FeedbackFindManyArgs)
  async feedbacks(@common.Req() request: Request): Promise<Feedback[]> {
    const args = plainToClass(FeedbackFindManyArgs, request.query);
    return this.service.feedbacks({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Feedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async feedback(
    @common.Param() params: FeedbackWhereUniqueInput
  ): Promise<Feedback | null> {
    const result = await this.service.feedback({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Feedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFeedback(
    @common.Param() params: FeedbackWhereUniqueInput,
    @common.Body() data: FeedbackUpdateInput
  ): Promise<Feedback | null> {
    try {
      return await this.service.updateFeedback({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          hotel: data.hotel
            ? {
                connect: data.hotel,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Feedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFeedback(
    @common.Param() params: FeedbackWhereUniqueInput
  ): Promise<Feedback | null> {
    try {
      return await this.service.deleteFeedback({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
