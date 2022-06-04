

export abstract class SearchService<E,F> {

    abstract Search(context?: E):F[]

}
