import "./styles/main.scss";
import { getCurrentPage } from "./Router";
import { Header } from "./components/Header";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `

${Header()}

<main class="text-white p-6">
	${getCurrentPage()}
</main>
`;
