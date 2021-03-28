<script>
  import Button from "./Button.svelte";

  let someText = `Frontend Developer at Platzi`;
  let count = 0;
  let styles = { darkMode: false };

  function handleClick() {
    count += 1;
  }

  function toogleDarkMode() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="About {!styles.darkMode ? 'lightModeText' : 'darkModeText'}">
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>Hello DarkMode</p>
  {/if}
  <Button text="Click" {count} on:click={handleClick} />
  <button on:click={handleClick}>Count {count > 0 ? count : ""}</button>
  <Button text="DarkMode" on:click={toogleDarkMode} />
  <button on:click={toogleDarkMode}
    >DarkMode {!styles.darkMode ? "🌘" : "🌞"}</button
  >
</div>

<style>
  .lightModeText {
    color: var(--theme-color);
  }
  .darkModeText {
    color: var(--theme-text-dark-mode);
  }
</style>
