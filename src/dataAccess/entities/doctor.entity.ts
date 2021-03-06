import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Gender } from '../../dom/domainClass/enums';

@Entity({ name: 'doctor' })
export class DoctorEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  gender: Gender;

  @Column()
  photo: string;
}
