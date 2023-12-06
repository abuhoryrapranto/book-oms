import { Entity, PrimaryGeneratedColumn, Generated, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column()
    name: string

    @Column({unique: true})
    @IsEmail()
    email: string

    @Column({unique: true, nullable: true})
    phone: string

    @Column()
    isActive: boolean

    @DeleteDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    deletedAt: Date

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date
}