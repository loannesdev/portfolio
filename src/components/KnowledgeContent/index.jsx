import { useState } from 'preact/hooks';
import { technologies } from "../../utils/info.json";
import "./styles.css";

technologies.reverse();

export default function KnowledgeContent() {
  const [seeAll, setSeeAll] = useState(false);
  const [seeFavorites, setSeeFavorites] = useState(false);
  let DATA = seeAll ? technologies : technologies.slice(0, 14);
  DATA = seeFavorites ? DATA.filter((elm) => elm.fav === true) : DATA;

  return (
    <>
      <div data-class="filters-knowledge">
        <button
          data-class="see-more-button-knowledge"
          onClick={() => setSeeAll(!seeAll)}
        >
          {!seeAll ? "Ver más" : "Ver menos"}
        </button>
        <button
          data-class="favorites-button-knowledge"
          onClick={() => setSeeFavorites(!seeFavorites)}
        >
          {!seeFavorites ? "Favoritos" : "Dejar de ver favoritos"}
        </button>
      </div>

      <div data-class="card-container-knowledge">
        {
          DATA.map((elm, index) => {
            return (
              <a href={elm.website} target="_blank" rel="noreferrer noopener" key={index} data-class="card-knowledge">
                {
                  elm.icon_name
                    ? <img src={`/icons/${elm.icon_name}.svg`} data-class="img-icon-knowledge" />
                    : null
                }

                <span data-class="card-title-knowledge">{elm.name}</span>
              </a>
            );
          })
        }
      </div>
    </>
  )
}

