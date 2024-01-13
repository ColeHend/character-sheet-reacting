import { BehaviorSubject, Observable } from "rxjs";
import { Character } from "../models/character.model";
import { HttpClient } from "../utility/httpclient";
export class CharacterService {
  private http: HttpClient ;
  constructor() {
    this.http = new HttpClient();
  }
  private characters: BehaviorSubject<Character>[] = [];
  
}





