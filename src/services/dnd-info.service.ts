import { HttpClient } from "../utility/httpclient";
import { MainClass, Proficiency, AbilityScore, Skill, Spell, Subclass, Feat, EndpointResults } from '../models/dnd-index'
import { concatMap, forkJoin, BehaviorSubject, tap, finalize } from "rxjs";

type Endpoints = 'ability-scores'| 'alignments'| 'backgrounds'| 'classes'| 'conditions' | 'damage-types' | 'equipment' | 'equipment-categories' | 'feats' | 'features' | 'languages'| 'magic-items'| 'magic-schools' | 'monsters' | 'proficiencies' | 'races' | 'rule-sections' | 'rules' | 'skills' | 'spells' | 'subclasses' | 'subraces' | 'traits'| 'weapon-properties';

export class DndInfoService {
    private http: HttpClient;
    constructor() {
        this.http = new HttpClient();
    }
    private infoURL = 'https://www.dnd5eapi.co';
    private proficiencies$ = new BehaviorSubject<Proficiency[]>([]);
    private classes$ = new BehaviorSubject<MainClass[]>([]);
    private abilityScores$ = new BehaviorSubject<AbilityScore[]>([]);
    private skills$ = new BehaviorSubject<Skill[]>([]);
    private spells$ = new BehaviorSubject<Spell[]>([]);
    private subclasses$ = new BehaviorSubject<Subclass[]>([]);
    private feats$ = new BehaviorSubject<Feat[]>([]);

    public getEndpoint<T>(endpoint: Endpoints, other: string = '') {
        return this.http.get<T>(this.infoURL+ '/api/' + endpoint + other);
    }
    public getUrl<T>(url: string) {
        return this.http.get<T>(this.infoURL + url);
    }
    public getProficiencies() {
        if (this.proficiencies$.value.length > 0) {
            return this.proficiencies$.asObservable();
            
        }

        return this.getEndpoint<EndpointResults>('proficiencies').pipe(
            concatMap(results => {
                const profs$ = results.results.map((result) => {
                    return this.getUrl<Proficiency>(result.url);
                });
                return forkJoin(profs$);
            }),
            tap(profs => this.proficiencies$.next(profs))
        );
    }

    public getClasses() {
        if (this.classes$.value.length > 0) {
            return this.classes$.asObservable();
        }

        return this.getEndpoint<EndpointResults>('classes').pipe(
            concatMap(results => {
                const classes$ = results.results.map((result) => {
                    return this.getUrl<MainClass>(result.url);
                });
                return forkJoin(classes$);
            }),
            tap(classes => this.classes$.next(classes))
        );
    }

    public getAbilityScores() {
        if (this.abilityScores$.value.length > 0) {
            return this.abilityScores$.asObservable();
        }

        return this.getEndpoint<EndpointResults>('ability-scores').pipe(
            concatMap(results => {
                const abilityScores$ = results.results.map((result) => {
                    return this.getUrl<AbilityScore>(result.url);
                });
                return forkJoin(abilityScores$);
            }),
            tap(abilityScores => this.abilityScores$.next(abilityScores))
        );
    }

    public getSkills() {
        if (this.skills$.value.length > 0) {
            return this.skills$.asObservable();
        }

        return this.getEndpoint<EndpointResults>('skills').pipe(
            concatMap(results => {
                const skills$ = results.results.map((result) => {
                    return this.getUrl<Skill>(result.url);
                });
                return forkJoin(skills$);
            }),
            tap(skills => this.skills$.next(skills))
        );
    }

    public getSpells() {
        if (this.spells$.value.length > 0) {
            return this.spells$.asObservable();
        }

        return this.getEndpoint<EndpointResults>('spells').pipe(
            concatMap(results => {
                const spells$ = results.results.map((result) => {
                    return this.getUrl<Spell>(result.url);
                });
                return forkJoin(spells$);
            }),
            tap(spells => this.spells$.next(spells))
        );
    }

    public getSubclasses() {
        if (this.subclasses$.value.length > 0) {
            return this.subclasses$.asObservable();
        }

        return this.getEndpoint<EndpointResults>('subclasses').pipe(
            concatMap(results => {
                const subclasses$ = results.results.map((result) => {
                    return this.getUrl<Subclass>(result.url);
                });
                return forkJoin(subclasses$);
            }),
            tap(subclasses => this.subclasses$.next(subclasses))
        );
    }

    public getFeats() {
        if (this.feats$.value.length > 0) {
            return this.feats$.asObservable();
        }

        return this.getEndpoint<EndpointResults>('feats').pipe(
            concatMap(results => {
                const feats$ = results.results.map((result) => {
                    return this.getUrl<Feat>(result.url);
                });
                return forkJoin(feats$);
            }),
            tap(feats => this.feats$.next(feats))
        );
    }
}