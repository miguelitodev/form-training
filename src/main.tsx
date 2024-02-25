import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";

import "./index.css";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Theme>
			<App />
			<Toaster richColors />
		</Theme>
	</React.StrictMode>
);
