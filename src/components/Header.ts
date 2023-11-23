import { getMenu } from "../Router";

export const Header = () => {
	return /*html*/ `
	 <div x-data="{ open: false }" class="bg-[#212529] shadow-md">
			<div class="mx-auto flex justify-between items-center p-4">
				<div class="flex gab-3">
					<img class="h-[3rem] mr-6" src="images/android-chrome-512x512.png"/>
					<div class="text-blue-500 text-xl items-center hidden lg:flex">
						<ul class="lg:flex space-x-4">
							${getMenu()}
						</ul>
					</div>
				</div>
				<button @click="open = !open" class="lg:hidden text-blue-500 justify-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div class="hidden lg:flex">
					<form class="flex gap-3 items-center" role="search">
						<input class="h-[40px]" type="search" placeholder="Such deine Pizza" aria-label="Search">
						<button class="success mt-2 h-[40px]" type="submit">Search</button>
					</form>
				</div>
			</div>
			<div x-show="open" class="lg:hidden">
				<ul class="bg-[#333] p-4">
					${getMenu()}
				</ul>
			</div>
		</div>
	
	`;
};
