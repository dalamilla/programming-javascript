import "./assets/styles/main.css";
import "./assets/styles/app.css";

import clap from "./assets/audio/clap.mp3";
import closedHH from "./assets/audio/closed-hh.mp3";
import heater1 from "./assets/audio/heater-1.mp3";
import heater2 from "./assets/audio/heater-2.mp3";
import heater3 from "./assets/audio/heater-3.mp3";
import heater4 from "./assets/audio/heater-4.mp3";
import kick from "./assets/audio/kick.mp3";
import kickNHat from "./assets/audio/kick-n-hat.mp3";
import openHH from "./assets/audio/open-hh.mp3";

import logo from "./assets/images/logo.svg?raw";

const DRUM_MACHINE_DATA = [
	{ id: "heater-1", key: "Q", name: "Heater-1", src: heater1 },
	{ id: "heater-2", key: "W", name: "Heater-2", src: heater2 },
	{ id: "heater-3", key: "E", name: "Heater-3", src: heater3 },
	{ id: "heater-4", key: "A", name: "Heater-4", src: heater4 },
	{ id: "clap", key: "S", name: "Clap", src: clap },
	{ id: "open-hh", key: "D", name: "Open-HH", src: openHH },
	{ id: "kick-n-hat", key: "Z", name: "Kick-n-Hat", src: kickNHat },
	{ id: "kick", key: "X", name: "Kick", src: kick },
	{ id: "closed-hh", key: "C", name: "Closed-HH", src: closedHH },
];

const padButtonsHTML = DRUM_MACHINE_DATA.map(
	(pad) => `
    <button id="${pad.id}" class="drum-pad" data-key="${pad.key}">
        ${pad.key}
        <audio class="clip" id="${pad.key}" src="${pad.src}"></audio>
    </button>
  `,
).join("");

const app = document.querySelector("#app");

app.innerHTML = `
    <div id="drum-machine">
        <div class="pad-area">
            ${padButtonsHTML}
        </div>
        <div class="panel-area">
            <div id="display">
                <div class="lcd">Drum Machine</div>
            </div>
            <div class="control">
                <span>Volumen</span>
                <input type="range" id="volumen" min="0" max="1" value="0.5" step="0.1">
            </div>
            <div class="logo">
                ${logo}
            </div>
        </div>
    </div>
`;

const drumPads = app.querySelectorAll(".drum-pad");
const volumeControl = app.querySelector("#volumen");
const lcd = app.querySelector(".lcd");
const clips = app.querySelectorAll(".clip");

let defaultTimeout;

const updateLCD = (text, resetDelay = 1000) => {
	clearTimeout(defaultTimeout);
	lcd.textContent = text;
	if (resetDelay) {
		defaultTimeout = setTimeout(() => {
			lcd.textContent = "Drum Machine";
		}, resetDelay);
	}
};

const playPad = (pad) => {
	const audio = pad.querySelector(".clip");
	if (!audio) return;

	audio.currentTime = 0;
	audio.play();

	pad.classList.add("drumactive");
	updateLCD(pad.id);
};

drumPads.forEach((pad) => {
	pad.addEventListener("click", () => {
		playPad(pad);
		setTimeout(() => {
			pad.classList.remove("drumactive");
		}, 100);
	});
});

window.addEventListener("keydown", (event) => {
	const key = event.key.toUpperCase();
	const pad = app.querySelector(`.drum-pad[data-key="${key}"]`);

	if (pad && !event.repeat) {
		playPad(pad);
	}
});

window.addEventListener("keyup", (event) => {
	const key = event.key.toUpperCase();
	const pad = app.querySelector(`.drum-pad[data-key="${key}"]`);

	if (pad) {
		pad.classList.remove("drumactive");
	}
});

volumeControl.addEventListener("input", (e) => {
	const volumeValue = e.target.value;
	clips.forEach((clip) => {
		clip.volume = volumeValue;
	});
	updateLCD(`Volume: ${Math.round(volumeValue * 100)}`, 800);
});
