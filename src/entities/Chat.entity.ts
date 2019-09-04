import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany
} from "typeorm";

import User from "./User.entity";
import Message from "./Message.entity";

@Entity()
class Chat extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(type => Message, message => message.chat)
	messages: Message[];

	@OneToMany(type => User, user => user.chat)
	participants: User[];

	@CreateDateColumn()
	createdAt: string;

	@UpdateDateColumn()
	updatedAt: string;
}

export default Chat;
