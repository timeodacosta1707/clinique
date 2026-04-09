import { Client } from "../../clients/entities/client.entity";
export declare class Animaux {
    id: number;
    prenom: string;
    age: number;
    taille: number;
    poids: number;
    espece: string;
    client: Client;
}
