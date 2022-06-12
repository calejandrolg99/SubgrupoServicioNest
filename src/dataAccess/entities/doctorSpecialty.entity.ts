import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'doctor_specialty' })
export class DoctorSpecialtyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_doctor: number;

  @Column()
  id_specialty: number;
}
