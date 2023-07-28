<script>
  import { readResume } from "../services/github";
  import { sections } from "../utils/const";

  const repo = readResume();
  const {
    about: { name, text },
  } = sections;
</script>

<section id={name}>
  <h2 class="section-title">{text}</h2>

  {#await repo}
    <p>Cargando...</p>
  {:then { basics: { summary } }}
    {#each summary as paragraph, index}
      <p>{paragraph}</p>

      {#if index + 1 !== summary.length}
        <br />
      {/if}
    {/each}
  {/await}
</section>

<style>
  section[id] {
    aspect-ratio: 78 / 23;

    & p {
      font-size: 1.2rem;
    }

    & a {
      color: currentColor;
    }
  }
</style>
