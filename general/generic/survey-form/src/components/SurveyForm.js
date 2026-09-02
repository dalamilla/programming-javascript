export function SurveyForm() {
	return `
    <form id="survey-form">
      <div class="form-group">
        <label id="name-label" for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label id="email-label" for="email">Email</label>
        <input id="email" type="email" placeholder="Enter your mail" required />
      </div>

      <div class="form-group">
        <label id="number-label" for="number">Age</label>
        <input id="number" type="number" min="10" max="99" placeholder="Age" />
      </div>

      <div class="form-group">
        <p class="form-text">Which Restaurant do you visit?</p>
        <select id="dropdown" required>
          <option disabled selected value>Restaurant</option>
          <option value="chac-mool">Chac Mool</option>
          <option value="tulum">Tulum</option>
          <option value="playacar">Playacar</option>
          <option value="bacalar">Bacalar</option>
        </select>
      </div>

      <div class="form-group">
        <p class="form-text">Would you recommend Bus Burger to a friend?</p>
        <label class="radio-label">
          <input name="recommend" value="definitely" type="radio" checked />Definitely
        </label>
        <label class="radio-label">
          <input name="recommend" value="maybe" type="radio" />Maybe
        </label>
        <label class="radio-label">
          <input name="recommend" value="not" type="radio" />Not
        </label>
      </div>

      <div class="form-group">
        <p class="form-text">Which is your favorite food of the menu? (Check all that apply)</p>
        <label class="checkbox-label">
          <input name="prefer" value="hotdog" type="checkbox" />Hot Dog
        </label>
        <label class="checkbox-label">
          <input name="prefer" value="burger" type="checkbox" />Burgers
        </label>
        <label class="checkbox-label">
          <input name="prefer" value="chips" type="checkbox" />Chips
        </label>
        <label class="checkbox-label">
          <input name="prefer" value="banderilla" type="checkbox" />Banderilla
        </label>
      </div>

      <div class="form-group">
        <p class="form-text">Any comments or suggestions?</p>
        <textarea id="comments" name="comment" placeholder="Enter your comment here..."></textarea>
      </div>

      <button id="submit" type="submit">Submit</button>
    </form>
  `;
}
