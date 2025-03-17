// import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

// @Entity('users')
// @Unique(['email'])
export class User {
  // @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  email: string;

  // @Column()
  username: string;

  constructor(id: number, email: string, username: string) {
    this.id = id;
    this.email = email;
    this.username = username;
  }
}
