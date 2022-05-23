/* eslint-disable no-unused-vars */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
    //   DB_PORT: number;
    //   DB_USER: string;
      PORT: number;
      NODE_ENV: 'development' | 'test' ;
    }
  }
}
