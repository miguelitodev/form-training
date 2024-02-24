import {
	Flex,
	Text,
	TextField,
	Container,
	Section,
	Button,
} from "@radix-ui/themes";
import { useState } from "react";

export function App() {
	const [formStep, setFormStep] = useState(0);

	function nextStep() {
		setFormStep((prevState) => prevState + 1);
	}

	function backStep() {
		setFormStep((prevState) => prevState - 1);
	}

	return (
		<Container size="4">
			<Flex
				className="h-screen"
				direction="column"
				justify="center"
				align="center"
			>
				<form className="h-56 flex flex-col justify-between">
					{formStep !== 3 && (
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
						<Section size="2">
							<label htmlFor="name">
								<Text size="1">Nome</Text>
							</label>
							<TextField.Root>
								<TextField.Input
									id="name"
									placeholder="Digite aqui..."
									type="text"
								/>
							</TextField.Root>
						</Section>
					)}

					{formStep === 1 && (
						<Section size="2">
							<label htmlFor="email">
								<Text size="1">E-mail</Text>
							</label>
							<TextField.Root>
								<TextField.Input
									id="email"
									placeholder="Digite aqui..."
									type="email"
								/>
							</TextField.Root>
						</Section>
					)}

					{formStep === 2 && (
						<Section size="2">
							<label htmlFor="password">
								<Text size="1">Senha</Text>
							</label>
							<TextField.Root>
								<TextField.Input
									id="password"
									placeholder="Digite aqui..."
									type="password"
								/>
							</TextField.Root>
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
					{formStep === 3 ? (
						<Flex gap="2">
							<Button type="button" onClick={backStep}>
								Voltar
							</Button>

							<Button type="button" onClick={() => {}}>
								Resultados
							</Button>
						</Flex>
					) : (
						<Flex gap="2">
							{formStep !== 1 && (
								<Button type="button" onClick={backStep}>
									Voltar
								</Button>
							)}

							<Button type="button" onClick={nextStep}>
								Proximo
							</Button>
						</Flex>
					)}
				</form>
			</Flex>
		</Container>
	);
}
