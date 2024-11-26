import { Module } from "@nestjs/common";
import { DBModule } from "../database";
import { UserEntity } from "./users/user.entity";

@Module({
    controllers: [],
    providers: [],
    imports: [
        DBModule.forRoot({
            entities: [UserEntity],
        })
    ]
})

export class DomainModule { }