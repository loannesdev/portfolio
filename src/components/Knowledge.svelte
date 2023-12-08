<script>
  import { readCV } from "../services/github";
  import { sections } from "../utils/const";
  import "./Icon.js";

  const {
    knowledge: { name, text },
  } = sections;
  const state = { seeFavorites: false };
  const cv = readCV();

  $: favoriteData = (data) => {
    return state.seeFavorites ? data.filter((elm) => elm.isFavorite) : data;
  };
</script>

<section id={name}>
  <h1 class="section-title">{text}</h1>

  {#await cv}
    <p>Cargando...</p>
  {:then { skills }}
    <div class="filters">
      <button
        type="button"
        class="see-favorites-button"
        aria-label="Ver favoritos"
        on:click={() => (state.seeFavorites = !state.seeFavorites)}
      >
        {state.seeFavorites ? "Dejar de ver favoritos" : "Ver favoritos"}
      </button>
    </div>

    <section class="card-container">
      {#each favoriteData(skills) as { website, name, iconName, level }}
        <a
          href={website}
          target="_blank"
          rel="noreferrer noopener"
          class="card"
          aria-label={`Visitar sitio web de ${name.toLowerCase()}`}
        >
          {#key iconName}
            <svg-icon name={iconName} url="../icons/knowledge" />
          {/key}

          <footer class="card-footer">
            <span class="card-title">{name}</span>
            <small class="card-level" data-level={level}>{level}</small>
          </footer>
        </a>
      {/each}
    </section>
  {/await}
</section>

<style>
  :global([theme="dark"])
    section[id="knowledge"]
    .filters
    .see-favorites-button {
    border-color: var(--palette-white);
  }

  :global([theme="dark"])
    section[id="knowledge"]
    .card-container
    .card
    .card-footer
    .card-level {
    color: currentColor;
  }

  section[id="knowledge"] {
    display: grid;
    gap: 1.5rem;
    width: 100%;
    aspect-ratio: 395 / 233;
    align-content: baseline;
    width: 100%;

    & .filters {
      display: flex;
      justify-self: center;
      gap: 1rem;

      & button {
        transition-duration: 0.2s;
        transition-property: background-color, color;
        transition-timing-function: ease;
        background-color: transparent;
        padding: 0.25rem 0.5rem;
        border-width: 1px;
        border-color: var(--palette-black);
        border-style: solid;
        border-radius: var(--border-radius-min);
        font-size: 0.938rem;
        color: currentColor;
        font-weight: 500;

        @media (pointer: fine) {
          &:hover {
            background-color: var(--current-text-theme);
            color: var(--current-background-theme);
          }
        }

        @media (pointer: coarse) {
          &:active {
            background-color: var(--current-text-theme);
            color: var(--current-background-theme);
          }
        }
      }
    }

    & .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;

      & .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        text-decoration: none;
        padding: 0.3rem;
        transition-duration: 0.15s;
        transition-property: border;
        transition-timing-function: ease;
        border: 1px solid transparent;
        border-radius: var(--border-radius-min);
        text-align: center;
        padding: 12px 16px;

        @media (pointer: fine) {
          &:hover {
            border-color: var(--palette-grey);
            text-shadow: 1px 1.5px 2px var(--palette-grey);
          }
        }

        @media (pointer: coarse) {
          &:active {
            background-color: var(--palette-grey);
          }
        }

        & [icon] {
          height: 3rem;
          width: 3rem;
        }

        & [icon="github"],
        [icon="vercel"],
        [icon="markdown"] {
          filter: drop-shadow(0px 0px 6px var(--palette-white));
        }

        & .card-footer {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          gap: 3px;

          & .card-title {
            font-family: var(--font-family-text);
            font-weight: 600;
          }

          & .card-level {
            padding: 0.15rem 0.4rem;
            border-radius: var(--border-radius-med);
            border: 1px solid transparent;
            letter-spacing: 1px;
            line-height: normal;
            font-weight: 600;
          }

          & [data-level="básico" i] {
            color: #0050a0;
            background-color: rgba(225, 245, 254, 0.3);
            border-color: #64b5f6;
          }

          & [data-level="intermedio" i] {
            color: #105a51;
            background-color: hsla(177, 41%, 91%, 0.3);
            border-color: #4db6ac;
          }

          & [data-level="avanzado" i] {
            color: #6b4918;
            background-color: rgba(255, 236, 179, 0.3);
            border-color: #ffd54f;
          }
        }
      }
    }
  }
</style>
