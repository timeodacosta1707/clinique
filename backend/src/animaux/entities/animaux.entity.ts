import { Client } from "../../clients/entities/client.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('animaux')
export class Animaux {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    prenom: string;

    @Column()
    age: number;

    @Column('float')
    taille: number;

    @Column('float')
    poids: number;

    @Column()
    espece: string;

    @ManyToOne(() => Client, (client) => client.animaux, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: 'clientId' })
    client: Client;
}
