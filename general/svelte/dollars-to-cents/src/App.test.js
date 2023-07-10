import '@testing-library/jest-dom';

import {render, fireEvent} from '@testing-library/svelte';

import App from './App.svelte';

test('show title of app', () => {
  const {getByText} = render(App);

  expect(getByText('Convertion')).toBeInTheDocument();
});

test('show title button', () => {
  const {getByText} = render(App);

  expect(getByText('Convert')).toBeInTheDocument();
});

test('show info dollar', () => {
  const {getByText} = render(App);

  expect(getByText('Dollars')).toBeInTheDocument();
});

test('test quarter convertion', async () => {
  const {container} = render(App);

  const input = container.querySelector('.dollar-form-input');
  const button = container.querySelector('.button');

  await fireEvent.input(input, {target: {value: 1}});
  await fireEvent.click(button);

  expect(input.value).toBe('1');
  expect(container.querySelector('.cent-details-info p').textContent).toBe(
    'Quarter'
  );
  expect(container.querySelector('.cent-details-info-qty p').textContent).toBe(
    '4'
  );
});

test('test dime convertion', async () => {
  const {container} = render(App);

  const input = container.querySelector('.dollar-form-input');
  const button = container.querySelector('.button');

  await fireEvent.input(input, {target: {value: 0.2}});
  await fireEvent.click(button);

  expect(input.value).toBe('0.2');
  expect(container.querySelector('.cent-details-info p').textContent).toBe(
    'Dime'
  );
  expect(container.querySelector('.cent-details-info-qty p').textContent).toBe(
    '2'
  );
});

test('test nickel convertion', async () => {
  const {container} = render(App);

  const input = container.querySelector('.dollar-form-input');
  const button = container.querySelector('.button');

  await fireEvent.input(input, {target: {value: 0.05}});
  await fireEvent.click(button);

  expect(input.value).toBe('0.05');
  expect(container.querySelector('.cent-details-info p').textContent).toBe(
    'Nickel'
  );
  expect(container.querySelector('.cent-details-info-qty p').textContent).toBe(
    '1'
  );
});

test('test penny convertion', async () => {
  const {container} = render(App);

  const input = container.querySelector('.dollar-form-input');
  const button = container.querySelector('.button');

  await fireEvent.input(input, {target: {value: 0.04}});
  await fireEvent.click(button);

  expect(input.value).toBe('0.04');
  expect(container.querySelector('.cent-details-info p').textContent).toBe(
    'Penny'
  );
  expect(container.querySelector('.cent-details-info-qty p').textContent).toBe(
    '4'
  );
});
