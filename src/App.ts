import "./styles/main.scss";
import { getMenu, getCurrentPage } from "./Router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
	 <div x-data="{ open: false }" class="bg-[#212529] shadow-md">
			<div class="mx-auto flex justify-end lg:justify-between items-center p-4">
				<div class="text-blue-500 text-xl hidden lg:flex">
					<ul class="lg:flex space-x-4">
						${getMenu()}
					</ul>
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


<main class="text-white p-6">
	${getCurrentPage()}
</main>
`;
