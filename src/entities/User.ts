import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from "typeorm";
import { IsEmail, IsPhoneNumber } from "class-validator";

@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "text", unique: true })
	email: string;

	@Column({ type: "boolean", default: false })
	verifiedEmail: boolean;

	@Column({ type: "text" })
	firstName: string;

	@Column({ type: "text" })
	lastName: string;

	@Column({ type: "int" })
	age: number;

	@Column({ type: "text" })
	password: string;

	@Column({ type: "text" })
	phoneNumber: string;

	@Column({ type: "boolean", default: false })
	IsPhoneNumber: boolean;

	@Column({ type: "text" })
	profilePhoto: string;

	@Column({ type: "boolean", default: false })
	isDriving: boolean;

	@Column({ type: "boolean", default: false })
	isRiding: boolean;

	@Column({ type: "boolean", default: false })
	isTaken: boolean;

	@Column({ type: "double precision", default: 0 })
	lastLng: number;

	@Column({ type: "double precision", default: 0 })
	lastLat: number;

	@Column({ type: "double precision", default: 0 })
	lastDirection: number;

	@CreateDateColumn()
	createdAt: string;

	@UpdateDateColumn()
	updatedAt: string;

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

export default User;
