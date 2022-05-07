/* eslint-disable no-unused-vars */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HTTP_PORT: number;
      NODE_ENV: 'development' | 'test' | 'production';
      
      CI_DB_NAME: string;
      CI_DB_HOST: string;
      CI_DB_USERNAME: string;
      CI_DB_PASSWORD: string;
      //   DB_PORT: number;
    }
  }
}
