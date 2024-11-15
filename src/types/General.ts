import { PrismaClient } from "@prisma/client"
import { Session, User } from "next-auth"

export declare type LabhContext = {
    session: Session
    db: PrismaClient
    user: User
    [key: string]: any
}
