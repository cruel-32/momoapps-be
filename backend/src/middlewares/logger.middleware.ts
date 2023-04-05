import { Request, Response, NextFunction } from 'express';

export function logger3(req: Request, res: Response, next: NextFunction) {
  console.log('logger 미들웨어 테스트 Request3...');
  next();
}
