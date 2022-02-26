import { BeforeInsert, Column, Entity } from 'typeorm';
import { AbstractEntity } from 'src/libs/class/AbstractEntity';
import { Exclude } from 'class-transformer';
import { hash } from 'bcrypt';
import { UserStructure } from '../../shared';

@Entity({ name: 'Users' })
export default class User extends AbstractEntity implements UserStructure {
  @Column({ unique: true })
  email: string;

  @Column({ unique: true, width: 34 })
  username: string;

  @Column({ width: 44 })
  name: string;

  @Exclude()
  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }
}
