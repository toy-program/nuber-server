import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {rideStatus} from '../types/types';

@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column({type})
    status: string

    @Column({type: "text", enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"]})
    pickUpAddress: rideStatus;

    @Column({type: "double precision", default: 0})
    pickUpLat: number;

    @Column({type: "double precision", default: 0})
    pickUpLng: number;
    
    @Column({type: "text"})
    dropOffAddress: string;

    @Column({type: "double precision", default: 0})
    dropOffLat: number;

    @Column({type: "double precision", default: 0})
    price: number;

    @Column({type: "double precision", default: 0})
    dropOffLng: number;
    
    @Column({type: "text"})
    duration: number;
    
    @Column({type: "text"})
    distance: number;
    
    @CreateDateColumn() createdAt: string!
	@UpdateDateColumn() updatedAt: string!

}

export default Ride;