import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animaux } from '../../animaux/entities/animaux.entity';

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    civilite: string;

    @Column()
    prenom: string;

    @Column()
    nom: string;

    @Column()
    mail: string;

    @Column()
    tel: string

    @OneToMany(() => Animaux, (animal) => animal.client, {
        cascade: true
    })
    animaux: Animaux[]
}
