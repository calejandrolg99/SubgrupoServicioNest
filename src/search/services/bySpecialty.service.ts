import { SearchService } from "./search.service";


export class BySpecialty extends SearchService<string,string> {


    Search(context?: string): string[] {
        if (context) {
            return ['busqueda por una especialidad']
        }
        else{
            return ['busqueda general']
        }
    }
    

}