import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	Column
} from "typeorm";
import Chat from "./Chat.entity";
import User from "./User.entity";

@Entity()
class Message extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@ManyToOne(type => Chat, chat => chat.messages)
	chat: Chat;

	@ManyToOne(type => User, user => user.messages)
	author: User;

	@Column({ type: "text" })
	text: string;

	@CreateDateColumn()
	createdAt: string;

	@UpdateDateColumn() updatedAt: string;
}

export default Message;
