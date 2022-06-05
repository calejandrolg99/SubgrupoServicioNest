export interface Repository<C, L> {
  findAll(context?: C): L[];
}
