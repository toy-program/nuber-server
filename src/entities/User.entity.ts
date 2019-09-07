import { hash as bcryptHash, compare as bcryptCompare } from "bcrypt";

import { IsEmail } from "class-validator";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	BeforeInsert,
	BeforeUpdate,
	ManyToOne,
	OneToMany
} from "typeorm";

import Chat from "./Chat.entity";
import Message from "./Message.entity";
import Verification from "./Verification.entity";
import Ride from "./Ride.entity";

const BCRYPT_ROUND = 10;

@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: "text", nullable: true, unique: true })
	@IsEmail()
	email: string | null;

	@Column({ type: "boolean", default: false })
	verifiedEmail: boolean;

	@Column({ type: "text" })
	firstName: string;

	@Column({ type: "text" })
	lastName: string;

	@Column({ type: "int", nullable: true })
	age: number;

	@Column({ type: "text", nullable: true })
	password: string;

	@Column({ type: "text", nullable: true })
	facebookId: string;

	@Column({ type: "text", nullable: true })
	phoneNumber: string;

	@Column({ type: "boolean", default: false })
	verifiedPhonenNumber: boolean;

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
	lastOrientation: number;

	@ManyToOne(type => Chat, chat => chat.participants)
	chat: Chat;

	@OneToMany(type => Message, message => message.author)
	messages: Message[];

	@OneToMany(type => Verification, verification => verification.user)
	verifications: Verification[];

	@OneToMany(type => Ride, ride => ride.passenger)
	rideAsPassenger: Ride[];

	@OneToMany(type => Ride, ride => ride.driver)
	rideAsDriver: Ride[];

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	@CreateDateColumn() createdAt: string;
	@UpdateDateColumn() updatedAt: string;

	public comparePassword(password: string): Promise<boolean> {
		return bcryptCompare(password, this.password);
	}

	@BeforeInsert()
	@BeforeUpdate()
	async savePassword(): Promise<void> {
		if (this.password) {
			const hashedPassword = await this.hashPassword(this.password);
			this.password = hashedPassword;
		}
	}

	private hashPassword(password: string): Promise<string> {
		return bcryptHash(password, BCRYPT_ROUND);
	}
}

export default User;
