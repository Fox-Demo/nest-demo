import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//todo 了解客製化 Decorator 細節
//todo 了解 ExecutionContext 作用
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();

    if (data) {
      return request.user[data];
    }

    return request.user;
  },
);
