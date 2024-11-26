import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")

export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    public email!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    public username!: string;

    @CreateDateColumn({ type: "timestamp" })
    public created_at!: Date;
}