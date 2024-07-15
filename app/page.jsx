'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [email, setEmail] = useState('');
	const [isValid, setIsValid] = useState(true);

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValidEmail(email)) {
			setIsValid(true);
			// Handle valid email submission (e.g., send to server)
		} else {
			setIsValid(false);
		}
	};

	return (
		<main className="min-h-screen">
			<div className="min-h-screen md:flex md:justify-between">
				<div className="min-h-screen md:w-7/12">
					<div className="p-8 md:p-0 md:ml-[100px] xl:ml-[165px] md:mb-[80px] xl:mb-[136px] md:mt-[65px]">
						<Image
							src="/logo.svg"
							alt="Base Apparel"
							width={100}
							height={21}
							className="md:w-[158px] md:h-[33px"
						/>
					</div>
					<Image
						src="/hero-mobile.jpg"
						alt="Hero Image"
						width={375}
						height={250}
						className="mx-auto md:hidden"
					/>
					<div className="px-8 py-16 text-center md:text-left md:max-w-[300px] lg:max-w-[444px] md:w-full md:ml-[100px] xl:ml-[165px] md:p-0">
						<h1 className="text-grayishRed text-[40px] font-semibold uppercase leading-tight tracking-[10px] mb-4 md:text-[64px] md:mb-8">
							<span className="block text-desaturatedRed font-light">
								We're
							</span>{' '}
							coming soon
						</h1>
						<p className="text-sm text-desaturatedRed font-normal leading-normal mb-6 md:text-base md:mb-10 md:leading-loose">
							Hello fellow shoppers! We're currently building our
							new fashion store. Add your email below to stay
							up-to-date with announcements and our launch deals.
						</p>
						<form className="relative" onSubmit={handleSubmit}>
							<input
								type="email"
								name="email"
								id="sub"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email Address"
								className={`border ${
									isValid
										? 'border-desaturatedRed border-1 opacity-50'
										: 'border-softRed border-2 opacity-100'
								} rounded-full w-full h-[48px] pl-6 py-3 pr-[64px] md:h-[56px] md:pl-8 md:pr-[100px] placeholder:text-desaturatedRed
                            text-grayishRed focus:outline-none focus:opacity-100`}
							/>
							<button
								type="submit"
								className="absolute right-0 bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-full p-[11px] w-[64px] h-[48px] md:p-[19px] md:w-[100px] md:h-[56px] outline-none shadow-buttonShadow  hover:from-gradient-1-hover hover:to-gradient-2-hover"
							>
								<Image
									src="/icon-arrow.svg"
									alt="Icon arrow"
									width={9}
									height={18}
									className="mx-auto"
								/>
							</button>
							{!isValid && (
								<div className="absolute mt-2 text-sm text-softRed pl-6 md:pl-8">
									Please provide a valid email address.
								</div>
							)}
						</form>
					</div>
				</div>
				<Image
					src="/hero-desktop.jpg"
					alt="Hero Image"
					width={610}
					height={800}
					className="hidden md:block md:object-cover md:w-5/12"
				/>
			</div>
		</main>
	);
}
