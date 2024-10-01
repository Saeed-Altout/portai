'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

import { Container } from '@website/_components/ui/container';
import { NavMain, NavMobile } from '@website/_components/navbar';

import { useScrollStore } from '@website/hooks/scroll-to';
import { LogOut } from 'lucide-react';
import { useSession } from '@/providers/session-provider';

export const Navbar = () => {
	const scrollStore = useScrollStore();
	const { token } = useSession();

	return (
		<header className='shadow-md h-20 w-full flex justify-center items-center'>
			<Container className='w-full flex-row justify-between items-center'>
				<Logo />
				<NavMain />
				<NavMobile />
				<div className='hidden lg:flex items-center justify-end gap-x-4'>
					{!token && (
						<Button variant='ghost' className='text-gray-500' asChild>
							<Link href='/auth/login'>Log in</Link>
						</Button>
					)}

					{token && (
						<Button variant='ghost' size='icon' className='text-gray-500'>
							<LogOut className='h-4 w-4' />
						</Button>
					)}
					<Button onClick={scrollStore.scrollToSection}>Get Started</Button>
				</div>
			</Container>
		</header>
	);
};
