/* eslint-disable no-unused-vars */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HTTP_PORT: number;
      NODE_ENV: 'development' | 'test';
      
      CI_DB_PASSWORD: string;
      CI_DB_NAME: string;
      CI_DB_USERNAME: string;
      //   DB_PORT: number;
    }
  }
}
