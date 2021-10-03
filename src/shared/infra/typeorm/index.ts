import { createConnection, getConnectionOptions } from "typeorm";



export default async (host="database_login") => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(Object.assign(defaultOptions,{
        host : process.env.NODE_ENV ==='test' ? "localhost" : host,
        database: process.env.NODE_ENV === 'test'? "login_test" : defaultOptions.database

      }
    )
  )



}