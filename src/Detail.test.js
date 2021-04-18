import { render, screen } from '@testing-library/react';
import Detail from "./Detail";
import renderer from 'react-test-renderer';
test("detail snapshot",()=>{
	let detailPage = renderer.create(<Detail history={{goBack: () => "abc"}} />)
	let tree = detailPage.toJSON();
	expect(tree).toMatchSnapshot();
})