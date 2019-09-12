import {
	Column,
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert
} from "typeorm";

import { verificationTarget, verificationPurpose } from "../types/types";
import { createEmailKey, createPhoneKey } from "../utils/createVerificationKey";
const TARGET = ["PHONE", "EMAIL"];
const PURPOSE = ["SIGNUP", "PROFILE"];

@Entity()
class Verification extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: "text", enum: TARGET })
	target: verificationTarget;

	@Column({ type: "text", enum: PURPOSE })
	purpose: verificationPurpose;

	@Column({ type: "text" })
	payload: string;

	@Column({ type: "text" })
	key: string;

	@Column({ type: "boolean", default: false })
	verified: boolean;

	@CreateDateColumn()
	createdAt: string;
	@UpdateDateColumn() updatedAt: string;

	@BeforeInsert()
	private createKey(): void {
		if (this.target === TARGET[0]) {
			this.key = createPhoneKey();
		} else {
			this.key = createEmailKey();
		}
	}
}

export default Verification;
