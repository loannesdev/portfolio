<script>
  import GithubIcon from "@/icons/github.svg?raw";
  import ExternalLinkIcon from "@/icons/tabler-external-link.svg?raw";
  import { readRepos } from "@/services";
  import { github, sections } from "@/utils/const";

  const projects = readRepos();
  const { text, name } = sections.find((elm) => elm.name === "projects");

  const anchorPropsExternal = {
    target: "_blank",
    rel: "noreferrer noopener",
  };
</script>

{#snippet errorMessage()}
  <p id="error-message">
    ¡Uy!, parece que algo falló, aun así puedes visitar mi cuenta en <strong
      ><a href={github.projects} {...anchorPropsExternal}>GitHub</a></strong
    > para revizar mis proyectos.
  </p>
{/snippet}

<section id={name}>
  <h1 class="section-title">
    <a {anchorPropsExternal} href={`#${name}`}>{text}</a>
  </h1>

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
              <a href={htmlUrl} {...anchorPropsExternal}>
                {@html GithubIcon} Repositorio
              </a>
            {/if}

            {#if homepage && homepage.length}
              <a href={homepage} {...anchorPropsExternal}>
                {@html ExternalLinkIcon} Demo
              </a>
            {/if}
          </footer>
        </article>
      {/each}
    </section>
  {:catch}
    {@render errorMessage()}
  {/await}

  <noscript>
    {@render errorMessage()}
  </noscript>
</section>

<style>
  section[id] {
    aspect-ratio: 197 / 246;

    & .container {
      column-gap: 0.5rem;
      column-count: auto;
      column-width: 20rem;

      & .card {
        border: 0.1rem solid var(--palette-grey);
        padding: 16px;
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
          font-weight: 800;
          font-family: var(--font-title);
        }

        & .description-card {
          font-size: 18px;
          word-break: break-word;
          text-wrap: pretty;
          color: var(--reading-text-color);
          font-weight: 100;
        }

        & .topics-container {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;

          & .topics-title {
            font-size: 1.15rem;
            font-weight: bold;
            font-family: var(--font-title);
          }

          & .topics-group {
            display: flex;
            gap: 0.3rem;
            flex-wrap: wrap;

            & .topic {
              background-color: color-mix(
                in srgb,
                transparent 97%,
                var(--current-text-theme)
              );
              padding: 4px 8px;
              border-radius: var(--border-radius-min);
              margin: 0;
              font-weight: 100;
            }
          }
        }

        & .footer-card {
          display: flex;
          flex-wrap: wrap;
          word-break: keep-all;
          gap: 12px;

          & > a {
            --button-text-shadow: 0px 0px 16px var(--current-neon-theme);
            padding: 8px 16px;
            border: 1px solid var(--palette-grey);
            text-decoration: none;
            transition: 0.2s ease;
            transition-property: color, background-color, border-color;
            border-radius: var(--border-radius-min);
            color: currentColor;
            display: flex;
            align-items: center;
            gap: 6px;

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

            & > :global(svg) {
              height: 24px;
              width: 24px;
              transition: 0.2 ease;
              transition-property: color, stroke;
              color: currentColor;
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
