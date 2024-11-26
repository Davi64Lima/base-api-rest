import { Module } from "@nestjs/common";
import { DBModule } from "../database";
import { UserEntity } from "./users/user.entity";
import { UserModule } from "./users/user.module";

@Module({
    controllers: [],
    providers: [],
    imports: [UserModule,
        DBModule.forRoot({
            entities: [UserEntity],
        })
    ]
})

export class DomainModule { }