import styled from "styled-components";
import tags from "./tags.json";

const TituloTags = styled.h3`
	color: #d9d9d9;
	font-size: 24px;
	margin: 0;
`;

const BotaoTags = styled.button`
	align-items: center;
	background: rgba(217, 217, 217, 0.3);
	border: 2px solid transparent;
	border-radius: 10px;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
  transition: background-color 0.3s ease;
	font-size: 24px;
	padding: 12px;
	&:hover {
		border-color: #c98cf1;
	}
`;

const ContainerTags = styled.section`
	align-items: center;
	display: flex;
	gap: 64px;
	margin-top: 56px;
`;

const Div = styled.div`
	display: flex;
	gap: 24px;
	justify-content: end;
`;

const Tags = ({ setTag }) => {
	return (
		<ContainerTags>
			<TituloTags>Busque por tags:</TituloTags>
			<Div>
				{tags.map((tag) => (
					<BotaoTags key={tag.id} onClick={() => setTag(tag.tag)}>
						{tag.titulo}
					</BotaoTags>
				))}
			</Div>
		</ContainerTags>
	);
};

export default Tags;
