<script>
  import { readCV } from "../services/github";
  import { sections } from "../utils/const";

  const {
    knowledge: { name, text },
  } = sections;
  const state = { seeFavorites: false };
  const cv = readCV();

  $: favoriteData = (data) =>
    state.seeFavorites ? data.filter((elm) => elm.isFavorite) : data;
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
        aria-label="See favorites knowledge"
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
          aria-label={`Sitio web de ${name.toLowerCase()}`}
          title="Visitar sitio web"
        >
          {#if iconName}
            <img
              src={`/icons/${iconName}.svg`}
              class="img-icon"
              alt={`imagen de ${name}`}
            />
          {/if}

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
  :global(.dark) section[id="knowledge"] .filters button {
    &:hover,
    &:active {
      border-color: var(--palette-white);
    }
  }

  :global(.dark)
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
        transition: var(--transition-one-milisecond);
        background-color: transparent;
        border: none;
        padding: 0.25rem 0.5rem;
        border: 0.1rem solid transparent;
        border-radius: var(--border-radius-min);
        font-size: 14px;
        color: currentColor;

        &:hover,
        &:active {
          border-color: var(--palette-black);
        }
      }
    }

    & .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;

      & a {
        padding: 0.5rem 0.3rem;
      }

      & .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        text-decoration: none;
        padding: 0.3rem;
        transition: var(--transition-one-milisecond);
        border: 0.1rem solid transparent;
        border-radius: var(--border-radius-min);

        &:hover {
          border-color: var(--palette-grey);
          text-shadow: 1px 1.5px 2px var(--palette-grey);
        }

        &:active {
          background-color: var(--palette-grey);
        }

        & .img-icon {
          height: 3rem;
          width: 3rem;
        }

        & .card-footer {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          gap: 3px;

          & .card-title {
            font-family: var(--font-family-title);
            font-weight: 600;
          }

          & .card-level {
            padding: 0.15rem 0.4rem;
            border-radius: var(--border-radius-med);
            border: 1px solid transparent;
            letter-spacing: 1px;
            line-height: normal;
          }

          & [data-level="básico" i] {
            color: #006dda;
            background-color: rgba(225, 245, 254, 0.3);
            border-color: #64b5f6;
          }

          & [data-level="intermedio" i] {
            color: #00796b;
            background-color: hsla(177, 41%, 91%, 0.3);
            border-color: #4db6ac;
          }

          & [data-level="avanzado" i] {
            color: #8c5f1e;
            background-color: rgba(255, 236, 179, 0.3);
            border-color: #ffd54f;
          }
        }
      }
    }
  }
</style>
