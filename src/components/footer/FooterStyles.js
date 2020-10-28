import styled from 'styled-components';

const StyledFooter = styled.footer`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	color: ${(pr) => pr.theme.black};
	div {
		/* border: 1px solid green; */
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
	}
	a {
		text-decoration: underline;
		font-weight: 500;
		color: ${(pr) => pr.theme.black};
		&:hover {
			color: ${(pr) => pr.theme.seaGreen};
		}
	}
	@media (max-width: ${(pr) => pr.theme.phone}) {
		flex-flow: column nowrap;
		line-height: 2;
	}
`;

export default StyledFooter;
