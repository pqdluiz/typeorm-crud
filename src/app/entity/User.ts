import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
