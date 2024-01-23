<script>
  import { readRepos } from "../services.js";
  import { github, sections } from "../utils/const";

  const projects = readRepos();
  const {
    projects: { text, name },
  } = sections;

  const anchorPropsExternal = {
    target: "_blank",
    rel: "noreferrer noopener",
  };
</script>

<section id={name}>
  <h1 class="section-title">{text}</h1>

  <div class="container">
    {#await projects}
      <p>Cargando...</p>
    {:then project}
      {#each project as { name, description, topics, html_url: htmlUrl, homepage }}
        <fieldset class="card">
          <legend class="title-card">{name}</legend>

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
        </fieldset>
      {/each}
    {:catch}
      <p>
        ¡Uy!, parece que hubo un error pero puedes ver mis proyectos en
        {" "}
        <strong>
          <a href={github.projects} {...anchorPropsExternal}>GitHub</a>
        </strong>
        .
      </p>
    {/await}
  </div>
</section>

<style>
  section[id] {
    display: grid;
    gap: 0.2rem;
    width: 100%;

    & .container {
      column-gap: 0.5rem;
      column-count: auto;
      column-width: 20rem;
      aspect-ratio: 320 / 200;

      & .card {
        border: 0.1rem solid var(--palette-grey);
        padding: 0.5rem 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: min-content;
        margin-bottom: 0.5rem;
        break-inside: avoid;
        border-radius: var(--border-radius-min);

        & .title-card {
          font-size: 1.3rem;
          text-align: center;
          font-weight: 600;
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
          }

          & .topics-group {
            display: flex;
            gap: 0.3rem;
            flex-wrap: wrap;

            & .topic {
              background-color: var(--palette-grey);
              padding: 0.15rem 0.5rem;
              border-radius: 0.2rem;
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

          & :has(a) {
            padding: 0.3rem 0.6rem;
            border: 0.1rem solid var(--palette-grey);
            text-decoration: none;
            transition-duration: 0.2s;
            transition-property: color, background-color, border-color;
            transition-timing-function: ease;
            border-radius: var(--border-radius-min);

            @media (pointer: fine) {
              &:hover {
                border-color: var(--palette-black);
                background-color: var(--palette-black);
                color: var(--palette-white);
              }
            }

            @media (pointer: coarse) {
              &:active {
                border-color: var(--palette-black);
                background-color: var(--palette-black);
                color: var(--palette-white);
              }
            }

            &:is([theme="dark"]) {
              border-color: var(--palette-white);
              background-color: var(--palette-white);
              color: var(--palette-black);
            }
          }
        }
      }
    }
  }
</style>
