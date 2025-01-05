<script>
  import { readRepos } from "../services.js";
  import { github, sections } from "../utils/const";

  const projects = readRepos();
  const { text, name } = sections.find((elm) => elm.name === "projects");

  const anchorPropsExternal = {
    target: "_blank",
    rel: "noreferrer noopener",
  };

  const errorMsg = `
  <p id="error-message">
      ¡Uy!, parece que algo falló, aun así puedes visitar mi cuenta en <strong
        ><a href=${github.projects} ${Object.entries(anchorPropsExternal)
          .map(([key, value]) => `${key} = "${value}"`)
          .join(" ")}>GitHub</a></strong
      > para revizar mis proyectos.
  </p>
    `;
</script>

<section id={name}>
  <h1 class="section-title">{text}</h1>

  {#await projects}
    <p id="loading-message">Cargando...</p>
  {:then project}
    <section class="container">
      {#each project as { name, description, topics, html_url: htmlUrl, homepage }}
        <article class="card">
          <h1 class="title-card">{name}</h1>

          {#if description && description.length}
            <p class="description-card">{description}</p>
          {/if}

          {#if topics.length}
            <section class="topics-container">
              <h2 class="topics-title">Tecnologías usadas</h2>

              <ul class="topics-group">
                {#each topics as tech}
                  <li class="topic">{tech}</li>
                {/each}
              </ul>
            </section>
          {/if}

          <footer class="footer-card">
            {#if htmlUrl && htmlUrl.length}
              <a href={htmlUrl} {...anchorPropsExternal}>Repositorio</a>
            {/if}

            {#if homepage && homepage.length}
              <a href={homepage} {...anchorPropsExternal}>Ver página</a>
            {/if}
          </footer>
        </article>
      {/each}
    </section>
  {:catch}
    {@html errorMsg}
  {/await}

  <noscript>
    {@html errorMsg}
  </noscript>
</section>

<style>
  section[id] {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    min-height: 25rem;
    place-content: baseline;

    & .container {
      column-gap: 0.5rem;
      column-count: auto;
      column-width: 20rem;
      aspect-ratio: 197 / 246;

      & .card {
        border: 0.1rem solid var(--palette-grey);
        padding: 0.5rem 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: min-content;
        margin-bottom: 0.5rem;
        break-inside: avoid;
        border-radius: var(--border-radius-med);

        & .title-card {
          font-size: 24px;
          text-align: center;
          font-weight: bold;
          font-family: var(--font-family-title);
        }

        & .description-card {
          font-size: 18px;
          word-break: break-word;
          text-wrap: pretty;
        }

        & .topics-container {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;

          & .topics-title {
            font-size: 1.15rem;
            font-weight: bold;
            font-family: var(--font-family-title);
          }

          & .topics-group {
            display: flex;
            gap: 0.3rem;
            flex-wrap: wrap;

            & .topic {
              background-color: var(--palette-grey);
              padding: 0.15rem 0.5rem;
              border-radius: var(--border-radius-min);
              margin: 0;
            }
          }
        }

        & .footer-card {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          word-break: keep-all;
          gap: 1rem;

          & > a {
            --button-text-shadow: 0px 0px 16px var(--current-neon-theme);
            padding: 0.3rem 0.6rem;
            border: 0.1rem solid var(--palette-grey);
            text-decoration: none;
            transition-duration: 0.2s;
            transition-property: color, background-color, border-color;
            transition-timing-function: ease;
            border-radius: var(--border-radius-min);
            color: currentColor;

            @media (pointer: fine) {
              &:hover {
                border-color: var(--current-neon-theme);
                color: var(--current-neon-theme);
              }
            }

            @media (pointer: coarse) {
              &:active {
                border-color: var(--current-neon-theme);
                color: var(--current-neon-theme);
              }
            }
          }
        }
      }
    }

    & #error-message {
      padding: 4px 8px;
      border: 1px solid red;
      border-radius: var(--border-radius-min);
      background-color: color-mix(in srgb, transparent 90%, red);
    }

    &:has(noscript) {
      & #loading-message {
        display: none;
      }
    }
  }
</style>
