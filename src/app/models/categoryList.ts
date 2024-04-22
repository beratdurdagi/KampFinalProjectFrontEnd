import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryList extends ResponseModel {

    data:Category[],



}