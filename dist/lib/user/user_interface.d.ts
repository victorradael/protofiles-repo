import { Observable } from "rxjs";
interface UserServiceInterface {
    FindAll({}: {}): Observable<any>;
}
export { UserServiceInterface };
