import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */`

   <div x-data="{ open: false }" class="bg-[#212529] shadow-md">
      <div class="container mx-auto flex justify-between items-center p-4">
        <div class="text-blue-500 font-bold text-xl">Your Logo</div>
        <button @click="open = !open" class="lg:hidden text-blue-500">
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
          <ul class="lg:flex space-x-4">
            <li><a class="text-blue-500" href="#">Home</a></li>
            <li><a class="text-blue-500" href="#">About</a></li>
            <li><a class="text-blue-500" href="#">Services</a></li>
            <li><a class="text-blue-500" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div x-show="open" class="lg:hidden">
        <ul class="bg-white p-4">
          <li><a class="text-blue-500" href="#">Home</a></li>
          <li><a class="text-blue-500" href="#">About</a></li>
          <li><a class="text-blue-500" href="#">Services</a></li>
          <li><a class="text-blue-500" href="#">Contact</a></li>
        </ul>
      </div>
    </div>


<header class="text-white">
	<h1>Info Site</h1>
	${getMenu()}
</header>
<main class="text-white">
	${getCurrentPage()}
</main>
`;