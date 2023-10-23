'use client';

import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import {
	MdAccountCircle,
	MdAddLink,
	MdFilePresent,
	MdHome,
	MdLink,
	MdLogout,
	MdPerson,
	MdSettings,
} from 'react-icons/md';

const Header = () => {
	const { data: isLoggedIn, status: isLoading, update } = useSession();
	const path = usePathname();

	return (
		<header className=" p-4 flex justify-between items-center text-white">
			<Link href="/" className="text-white text-2xl font-bold">
				JSONify
			</Link>
			<ul className="menu lg:menu-horizontal rounded-box">
				<li
					className={`${
						path === '/saved'
							? 'bg-zinc-900 rounded-md hover:bg-none'
							: null
					}`}
				>
					<Link href={'/saved'}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						saved
						<span className="badge badge-sm badge-warning">
							NEW
						</span>
					</Link>
				</li>
			</ul>
			{isLoading === 'loading' ? (
				<span className="loading loading-spinner loading-lg"></span>
			) : isLoggedIn ? (
				<Dropdown className="bg-zinc-900 rounded-md text-white">
					<DropdownTrigger>
						<Avatar
							as={'button'}
							showFallback
							name={isLoggedIn.user?.name || ''}
							src={isLoggedIn.user?.image || ''}
						/>
					</DropdownTrigger>
					<DropdownMenu
						variant={'faded'}
						aria-label="Dynamic Actions"
					>
						<DropdownSection title="Navigations">
							<DropdownItem
								as={Link}
								key="home"
								variant="light"
								href="/"
								startContent={<MdHome className={`text-lg`} />}
							>
								Home
							</DropdownItem>
							<DropdownItem
								as={Link}
								key="saved"
								variant="light"
								href="/saved"
								startContent={<MdLink className={`text-lg`} />}
							>
								Saved Files
							</DropdownItem>

							<DropdownItem
								as={Link}
								key="features"
								variant="light"
								href="/features"
								startContent={<MdLink className={`text-lg`} />}
							>
								Features
							</DropdownItem>
						</DropdownSection>

						<DropdownSection title="Account">
							<DropdownItem
								key="logout"
								variant="light"
								startContent={
									<MdLogout className={`text-lg`} />
								}
								onClick={() => signOut()}
							>
								Logout
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			) : (
				<Button
					color="default"
					variant="light"
					onClick={() => signIn('google')}
				>
					Login With Google
				</Button>
			)}
		</header>
	);
};

export default Header;

{
	/* <header className=" p-4 flex justify-between items-center text-white">
			<Link href="/" className="text-white text-2xl font-bold">
				JSONify
			</Link>
			<ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
				<li>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						Inbox
						<span className="badge badge-sm">99+</span>
					</a>
				</li>
				<li>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Updates
						<span className="badge badge-sm badge-warning">
							NEW
						</span>
					</a>
				</li>
				<li>
					<a>
						Stats
						<span className="badge badge-xs badge-info"></span>
					</a>
				</li>
			</ul>
			{isLoading === 'loading' ? (
				<span className="loading loading-spinner loading-lg"></span>
			) : isLoggedIn ? (
				<Dropdown className="bg-zinc-900 rounded-md text-white">
					<DropdownTrigger>
						<Avatar
							as={'button'}
							showFallback
							name={isLoggedIn.user?.name || ''}
							src={isLoggedIn.user?.image || ''}
						/>
					</DropdownTrigger>
					<DropdownMenu
						variant={'faded'}
						aria-label="Dynamic Actions"
					>
						<DropdownSection title="Navigations">
							<DropdownItem
								as={Link}
								key="home"
								variant="light"
								href="/"
								startContent={<MdHome className={`text-lg`} />}
							>
								Home
							</DropdownItem>
							<DropdownItem
								as={Link}
								key="history"
								variant="light"
								href="/history"
								startContent={<MdLink className={`text-lg`} />}
							>
								History
							</DropdownItem>
						</DropdownSection>

						<DropdownSection title="Account">
							<DropdownItem
								key="logout"
								variant="light"
								startContent={
									<MdLogout className={`text-lg`} />
								}
								onClick={() => signOut()}
							>
								Logout
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			) : (
				<Button
					color="default"
					variant="light"
					onClick={() => signIn('google')}
				>
					Login With Google
				</Button>
			)}
		</header> */
}

// daisy ui
{
	/* <div className="navbar bg-base-500">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">JSONify</a>
			</div>
			<div className="flex-none gap-2">
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<Image
								src={isLoggedIn?.user?.image || ''}
								alt=""
								height={100}
								width={100}
								style={{
									width: '100%',
									height: 'auto',
								}}
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-1 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52"
					>
						<li className="p-px rounded-sm">
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>

						<li className="p-px rounded-sm">
							<Button
								variant="light"
								endContent={
									<MdFilePresent className={`text-lg`} />
								}
								as={'a'}
								href="/saved"
								className="text-left justify-between"
							>
								Saved Files
							</Button>
						</li>
						<li className="p-px rounded-sm">
							<Button
								variant="light"
								endContent={<MdLogout className={`text-lg`} />}
								onClick={() => signOut()}
								className="text-left justify-between"
							>
								Logout
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</div> */
}
