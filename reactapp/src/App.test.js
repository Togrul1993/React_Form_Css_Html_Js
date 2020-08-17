import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


changeAd = (e) => {
	this.setState({
		ad:e.target.value
	})
}
changeVeziyfe = (e) => {
	this.setState({
		veziyfe:e.target.value
	})
}
changeMaas = (e) => {
	this.setState({
		maas:e.target.value
	})
}