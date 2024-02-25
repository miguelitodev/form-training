import { Flex, Text, Container, Section } from "@radix-ui/themes";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MAX_STEPS = 3;

export function App() {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: "all" });
	const [formStep, setFormStep] = useState(0);

	function nextStep() {
		setFormStep((prevState) => prevState + 1);
	}

	function backStep() {
		setFormStep((prevState) => prevState - 1);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function submitForm(values: any) {
		window.alert(JSON.stringify(values, null, 2));
		nextStep();
	}

	return (
		<Container size="4">
			<Flex
				className="h-screen"
				direction="column"
				justify="center"
				align="center"
			>
				<form
					className="h-56 flex flex-col justify-between"
					onSubmit={handleSubmit(submitForm)}
				>
					{formStep !== 4 && (
						<span>
							Etapa {formStep} de {MAX_STEPS}
						</span>
					)}

					{formStep !== 3 && formStep !== 4 && (
						<Flex direction="column">
							<Text weight="bold" size="6">
								Cadastro de cliente
							</Text>
							<Text weight="light" color="gray">
								Preencha todos os dados abaixo para se cadastrar.
							</Text>
						</Flex>
					)}

					{formStep === 0 && (
						<Section size="2" className="flex flex-col">
							<label htmlFor="name">
								<Text size="1">Nome</Text>
							</label>

							<input
								id="name"
								placeholder="Digite aqui..."
								type="text"
								className={`${
									errors.name?.message ? "border-red-800" : ""
								} p-2 border rounded outline-none`}
								{...register("name", {
									required: "Digite seu nome corretamente!",
								})}
							/>

							{errors.name && (
								<Text
									size="1"
									className="pt-1 text-red-700"
								>{`${errors.name.message}`}</Text>
							)}
						</Section>
					)}

					{formStep === 1 && (
						<Section size="2" className="flex flex-col">
							<label htmlFor="email">
								<Text size="1">E-mail</Text>
							</label>

							<input
								id="email"
								placeholder="Digite aqui..."
								type="email"
								className={`${
									errors.email?.message ? "border-red-800" : ""
								} p-2 border rounded outline-none`}
								{...register("email", {
									required: "Digite seu e-mail corretamente!",
								})}
							/>

							{errors.email && (
								<Text
									size="1"
									className="pt-1 text-red-700"
								>{`${errors.email?.message}`}</Text>
							)}
						</Section>
					)}

					{formStep === 2 && (
						<Section size="2" className="flex flex-col">
							<label htmlFor="password">
								<Text size="1">Senha</Text>
							</label>

							<input
								id="password"
								placeholder="Digite aqui..."
								type="password"
								className={`${
									errors.password?.message ? "border-red-800" : ""
								} p-2 border rounded outline-none`}
								{...register("password", {
									required: "Digite sua senha corretamente!",
								})}
							/>

							{errors.password && (
								<Text
									size="1"
									className="pt-1 text-red-700"
								>{`${errors.password?.message}`}</Text>
							)}
						</Section>
					)}

					{formStep === 3 && (
						<Flex direction="column">
							<Text weight="bold" size="6">
								Cadastro concluido!
							</Text>
							<Text weight="light" color="gray">
								Por favor, siga em frente para ver os resultados.
							</Text>
						</Flex>
					)}

					{formStep === 4 && (
						<Flex direction="column">
							<Text weight="bold" size="9" color="green">
								Cadastro concluido!
							</Text>
							<pre className="mt-4">{JSON.stringify(watch(), null, 2)}</pre>
						</Flex>
					)}

					{formStep !== 4 && (
						<Flex gap="2">
							<button
								type="button"
								onClick={backStep}
								className={`${
									formStep === 0
										? "hidden"
										: "block bg-emerald-900 text-white font-bold p-2 rounded hover:bg-emerald-700 cursor-pointer"
								}`}
							>
								Voltar
							</button>

							<button
								type="submit"
								className={`${
									formStep === 3 ? "block" : "hidden"
								} bg-emerald-900 text-white font-bold p-2 rounded hover:bg-emerald-700 cursor-pointer`}
								disabled={!isValid}
							>
								Resultados
							</button>

							<button
								className={`${
									formStep !== 3 ? "block" : "hidden"
								} bg-blue-950 text-white font-bold p-2 rounded hover:bg-blue-800 cursor-pointer disabled:bg-gray-700 disabled:cursor-not-allowed`}
								type="button"
								onClick={nextStep}
								disabled={!isValid}
							>
								Proximo
							</button>
						</Flex>
					)}
				</form>
			</Flex>
		</Container>
	);
}
