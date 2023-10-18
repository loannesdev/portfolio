<script>
  import { readCV } from "../services/github";
  import { sections } from "../utils/const";

  const {
    about: { name, text },
  } = sections;
  let computedColor = () => Math.floor(Math.random() * 255);
</script>

<section id={name}>
  <h1 class="section-title">{text}</h1>

  {#await readCV()}
    <p>Cargando...</p>
  {:then { basics: { summary }, interests }}
    {#each summary as paragraph}
      <p class="paragraph">{@html paragraph}</p>
      <br />
    {/each}

    <h2 class="interests-title">Algunos de mis intereses son:</h2>
    <div class="interests-container">
      {#each interests as { name }, i}
        <small
          class="tag"
          style={`
          background-color: rgb(${computedColor()} ${computedColor()} ${computedColor()} / 40%);
          `}
        >
          {name}
        </small>
      {/each}
    </div>
  {/await}
</section>

<style>
  section[id] {
    aspect-ratio: 78 / 23;

    & .paragraph {
      font-size: 1.2rem;
    }

    & .interests-title {
      font-family: var(--font-family-title);
      font-size: large;
    }

    & .interests-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;

      & .tag {
        padding: 0.175rem 0.6rem;
        border-radius: var(--border-radius-min);
        line-height: normal;
        font-size: 14.5px;
      }
    }
  }
</style>
