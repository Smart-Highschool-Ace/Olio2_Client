declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    GQL_ENDPOINT: string;
    [key: string]: string | undefined;
  }
}
