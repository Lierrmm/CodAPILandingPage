<script lang="ts">
  import ColdWar from "../assets/coldwar.webp";
  import Vanguard from "../assets/vanguard.webp";
  import MW3 from "../assets/mw3.webp";
  import MW2 from "../assets/mw2.webp";
  import WZ2 from "../assets/wz2.webp";

  interface Game {
    title: string;
    image: string;
  }

  let games: Game[] = [
    {
      title: "Modern Warfare 3",
      image: MW3,
    },
    {
      title: "Warzone 2",
      image: WZ2,
    },
    {
      title: "Modern Warfare 2",
      image: MW2,
    },
    {
      title: "Vanguard",
      image: Vanguard,
    },
    {
      title: "Cold War",
      image: ColdWar,
    },
  ];
</script>

<section id="game" class="text-gray-300 body-font">
  <div class="container px-5 py-12 mx-auto mb-16">
    <div class="flex flex-col text-center w-full mb-16">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-rose-400"
      >
        Supported Games
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Support for the latest Call of Duty titles.
      </p>
    </div>
    <div
      class="flex flex-wrap items-center flex-col sm:flex-row -m-4 justify-center text-center"
    >
      {#each games as game}
        <div
          class="card card-compact w-40 h-52 bg-base-100 shadow-xl ml-4 mt-4 lg:mt-0"
          title={game.title}
        >
          <figure><img src={game.image} alt={game.title} /></figure>
        </div>
      {/each}
    </div>
  </div>
</section>
