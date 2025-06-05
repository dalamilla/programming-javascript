<script>
	let arrowSrc = 'images/arrow.png';
	import Button from './components/Button.svelte';
	import DollarForm from './components/DollarForm.svelte';
	import CentsDetails from './components/CentsDetails.svelte';

	let dollars = 0;
	let cents = [
		{ type: 'Quarter', value: 25, quantity: 0 },
		{ type: 'Dime', value: 10, quantity: 0 },
		{ type: 'Nickel', value: 5, quantity: 0 },
		{ type: 'Penny', value: 1, quantity: 0 }
	];

	function Convert() {
		let totalCents = dollars * 100;

		for (let i = 0; i < cents.length; i++) {
			cents[i].quantity = Math.floor(totalCents / cents[i].value);
			totalCents = totalCents % cents[i].value;
		}
	}
</script>

<div class="app">
	<h1>Convertion</h1>
	<div class="app-convert">
		<DollarForm bind:dollars />
		<img src={arrowSrc} class="app-convert-arrow" alt="arrow" />
		<CentsDetails {cents} />
	</div>
	<Button on:click={Convert}>Convert</Button>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border-radius: 10px;
		width: 500px;
		box-shadow: 0 20px 60px rgb(0 0 0 / 20%);
		padding: 10px;
		background-color: white;
	}
	.app-convert {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.app-convert-arrow {
		display: block;
		align-self: center;
		height: 30px;
		width: 30px;
	}
</style>
