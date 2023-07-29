<script>
  import { readCV } from "../services/github";
  import { sections } from "../utils/const";

  const repo = readCV();
  const {
    about: { name, text },
  } = sections;
  let computedColor = () => Math.floor(Math.random() * 16777215).toString(16);
</script>

<section id={name}>
  <h2 class="section-title">{text}</h2>

  {#await repo}
    <p>Cargando...</p>
  {:then { basics: { summary }, interests }}
    {#each summary as paragraph}
      <p>{paragraph}</p>
      <br />
    {/each}

    <p>
      <b class="interest-title">Algunos de mis intereses son:</b>
      <br />

      {#each interests as { name }, i}
        <small
          class="interest-tag"
          style={`background-color: #${computedColor()}7a`}
        >
          {name}
        </small>
        {interests.length !== i + 1 ? " " : ""}
      {/each}
    </p>
  {/await}
</section>

<style>
  section[id] {
    aspect-ratio: 78 / 23;

    & p {
      font-size: 1.2rem;

      & .interest-tag {
        background-color: red;
        padding: 0 0.5rem;
        text-wrap: nowrap;
        border-radius: var(--border-radius-min);
      }

      & .interest-title {
        font-family: var(--font-family-title);
      }
    }

    & a {
      color: currentColor;
    }
  }
</style>
