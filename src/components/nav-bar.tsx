'use client'
import React from "react";
import {Avatar, Button, Dropdown, Navbar} from "flowbite-react";
import {signIn, signOut, useSession} from "next-auth/react";

export function NavBar() {
    const session = useSession();
    console.log(session);
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    WC3 Kreisliga
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {!!session.data ?
                    <Dropdown inline label={<Avatar alt="User settings" img={session.data.user?.image!} rounded/>}>
                        <Dropdown.Header>
                        <span className="block text-sm">
                            {session.data.user?.name}
                        </span>
                            <span className="block truncate text-sm font-medium">
                            {session.data.user?.email}
                        </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item onClick={() => signOut()}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown> :
                    <Button onClick={() => signIn()}>Login / Register</Button>
                }
            </div>
        </Navbar>
    );
}