import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { createIcons, House, Mail, Menu, User, X } from "lucide";
import theCat from "./assets/images/the-cat.jpg";

const app = document.querySelector("#app");
app.innerHTML = `
  <div class="container">
    <div class="circle-container">
      <div class="circle">
        <button id="close" type="button">
          <i data-lucide="x" stroke-width="3"></i>
        </button>
        <button id="open" type="button">
          <i data-lucide="menu" stroke-width="3"></i>
        </button>
      </div>
    </div>

    <div class="content">
      <h1>Catmazing Article</h1>
      <small>Paul McCatney</small>
      <p>Cat ipsum dolor sit amet, i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Freak human out make funny noise mow mow mow mow mow mow success now attack human chase little red dot someday it will be mine! and lick the curtain just to be annoying, terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry and nyaa nyaa and my cat stared at me he was sipping his tea, too. Rub against owner because nose is wet hunt by meowing loudly at 5am next to human slave food dispenser. Throw down all the stuff in the kitchen trip owner up in kitchen i want food wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again, furball roll roll roll and scratch the furniture licks your face. I is playing on your console hooman scratch my tummy actually i hate you now fight me so scratch so owner bleeds, i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk. Trip on catnip human is washing you why halp oh the horror flee scratch hiss bite stares at human while pushing stuff off a table, or knock over christmas tree for i want to go outside let me go outside nevermind inside is better sit and stare, and claw drapes. Love you, then bite you eat plants, meow, and throw up because i ate plants and if it smells like fish eat as much as you wish. Give attitude. Run at 3am miaow then turn around and show you my bum, climb into cupboard and lick the salt off rice cakes so open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! so favor packaging over toy for give me attention or face the wrath of my claws. I shredded your linens for you. Bite nose of your human really likes hummus hiiiiiiiiii feed me now sit on human for cereal boxes make for five star accommodation . Bite off human's toes. Shake treat bag licks your face, steal mom's crouton while she is in the bathroom so meow. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now play with twist ties refuse to leave cardboard box hack up furballs. Sit on the laptop. Ignore the squirrels, you'll never catch them anyway bite nose of your human yet hide from vacuum cleaner eats owners hair then claws head.</p>
      <h3>The Cat</h3>
      <img src="${theCat}" alt="kitty" />
      <p>Cat ipsum dolor sit amet, lynx. Siberian abyssinian abyssinian and birman malkin. Russian blue bengal abyssinian . Turkish angora turkish angora. Cougar kitty yet turkish angora tabby ocelot. Russian blue lynx and russian blue manx. Lion leopard. Donskoy.</p>
    </div>
  </div>

  <nav>
    <ul>
      <li><i data-lucide="house" stroke-width="2.5"></i><a href="#">Home</a></li>
      <li><i data-lucide="user" stroke-width="2.5"></i><a href="#">About</a></li>
      <li><i data-lucide="mail" stroke-width="2.5"></i><a href="#">Contact</a></li>
    </ul>
  </nav>`;

createIcons({
	icons: {
		Menu,
		X,
		House,
		User,
		Mail,
	},
});

const open = app.querySelector("#open");
const close = app.querySelector("#close");
const container = app.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));
