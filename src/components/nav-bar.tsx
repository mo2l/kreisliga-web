'use client'
import React from "react";
import {Avatar, Dropdown, Navbar} from "flowbite-react";
import Link from "next/link";

export function NavBar() {
    const session = false;
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    WC3 Kreisliga
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {session ? <Dropdown inline label={<Avatar alt="User settings" img="/res/images/avatar.png" rounded/>}>
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown> : <Link href={"/login"}>Login</Link>}
            </div>
        </Navbar>
    );
}