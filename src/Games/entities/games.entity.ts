import { IsNotEmpty } from "class-validator";
import { Marcadores } from "src/Marcadores/entities/marcadores.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_games"})
export class Games{

    //declara e chave primaria e que e auto gerador
    @PrimaryGeneratedColumn()
    id: number;

    //@IsNotEmpty()
    @Column({length:100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    preco: number;

    // @UpdateDateColumn()
    // dataLancamento: Date;

    @ManyToOne(() => Marcadores, (marcadores) => marcadores.game, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: 'marcadores_id'})
    marcadores: Marcadores;
}