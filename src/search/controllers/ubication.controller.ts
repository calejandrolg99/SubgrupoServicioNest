import { Controller } from "@nestjs/common";
import { ByUbication } from "../services/byUbication.service";
import { SearchController } from "./search.controller";


@Controller('search/ubi')
export class UbicationController extends SearchController<string,string> {
    constructor(){
        super();
        this.searchService = new ByUbication();
    }


}