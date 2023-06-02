import NextAuth from 'next-auth';
import {AuthOptions} from "next-auth/src/core/types";
import DiscordProvider from 'next-auth/providers/discord'
import BattleNet from "next-auth/providers/battlenet";

const handler = NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_ID!,
            clientSecret: process.env.DISCORD_SECRET!
        }),
        BattleNet({
            clientId: process.env.BATTLENET_CLIENT_ID!,
            clientSecret: process.env.BATTLENET_CLIENT_SECRET!,
            issuer: "https://eu.battle.net/oauth"
        })
    ]
} as AuthOptions)

export {handler as GET, handler as POST}