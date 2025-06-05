<script>
	let src = 'images/dollar.png';
	export let dollars;
</script>

<div class="dollar-form">
	<div class="dollar-form-info">
		<img {src} class="dollar-form-icon" alt="dollar" />
		<p>Dollars</p>
	</div>
	<input type="number" class="dollar-form-input" bind:value={dollars} />
</div>

<style>
	.dollar-form {
		display: flex;
		align-items: center;
		gap: 10px;
		height: 250px;
		width: 125px;
	}
	.dollar-form-info {
		width: 50px;
		height: 50px;
		font-size: small;
		font-weight: bold;
		color: #636262;
	}
	.dollar-form-icon {
		height: 40px;
		width: 40px;
	}
	.dollar-form-input {
		height: 50px;
		width: 75px;
		background-color: #f2f2f2;
		color: #636262;
		font-size: large;
		font-weight: bold;
		border: 0;
		padding: 5px;
	}
	.dollar-form-input:focus {
		font-size: large;
		font-weight: bold;
		outline-width: 0;
	}
</style>
