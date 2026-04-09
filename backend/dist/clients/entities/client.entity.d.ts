import { Animaux } from '../../animaux/entities/animaux.entity';
export declare class Client {
    id: number;
    civilite: string;
    prenom: string;
    nom: string;
    mail: string;
    tel: string;
    animaux: Animaux[];
}
