import { Module } from "@nestjs/common";
import { DbConfig } from "./db.interface";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";
import { ConfigDatabase } from "../config/config.interface";

@Module({})
export class DBModule {
  private static getConnectionOptions(
    config: ConfigService,
    dbConfig: DbConfig
  ): TypeOrmModuleOptions {
    const dbData = config.get().db;
    if (!dbData) {
      throw Error("");
    }
    const connectionOptions = this.getConnectionOptionsMySql(dbData);
    return {
      ...connectionOptions,
      entities: dbConfig.entities,
      synchronize: true, // Aplicações em produção devem desativar essa opção
      logging: true,
    };
  }

  private static getConnectionOptionsMySql(
    dbData: ConfigDatabase
  ): TypeOrmModuleOptions {
    return {
      type: "mysql",
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '17192205',
      database: 'nestjs',
      //url: dbData.url,
      keepConnectionAlive: true,
      ssl:
        process.env.NODE_ENV !== "local" && process.env.NODE_ENV !== "test"
          ? { rejectUnauthorized: false }
          : false,
    };
  }

  public static forRoot(dbConfig: DbConfig) {
    return {
      module: DBModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => {
            return DBModule.getConnectionOptions(configService, dbConfig);
          },
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [],
      exports: [],
    };
  }
}
