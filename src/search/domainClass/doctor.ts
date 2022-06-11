import { Specialty } from './specialty';
import { Gender } from './enums';

export class Doctor<T> {
  private readonly name: string;
  private readonly gender: Gender;
  private readonly photo: string;
  private readonly specialties: Specialty<T>[];

  constructor(
    name: string,
    gender: Gender,
    photo: string,
    specialties: Specialty<T>[],
  ) {
    this.name = name;
    this.gender = gender;
    this.photo = photo;
    this.specialties = specialties;
  }

  getName(): string {
    return this.name;
  }

  getGender(): Gender {
    return this.gender;
  }

  getPhoto(): string {
    return this.photo;
  }

  getSpecialty(): T[] {
    const specialties: T[] = [];
    for (const iterator of this.specialties) {
      specialties.push(iterator.getName());
    }

    return specialties;
  }
}
