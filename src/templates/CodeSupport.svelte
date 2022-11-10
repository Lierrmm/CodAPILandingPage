<script lang="ts">
  interface Languages {
    title: string;
    icon: string;
    supported: boolean;
    link: string;
    css: string;
  }

  let languages: Languages[] = [
    {
      title: "Typescript",
      icon: "devicon-typescript-plain",
      supported: true,
      link: "https://docs.codapi.dev",
      css: "colored",
    },
    {
      title: "Python",
      icon: "devicon-python-plain",
      supported: true,
      link: "https://github.com/TodoLodo/cod-python-api",
      css: "colored",
    },
    {
      title: "Flutter",
      icon: "devicon-flutter-plain",
      supported: true,
      link: "https://pub.dev/packages/cod_api",
      css: "colored",
    },
    {
      title: "C#",
      icon: "devicon-csharp-plain",
      supported: true,
      link: "https://www.nuget.org/packages/CSharp-CODAPI",
      css: "text-purple-400",
    },
  ];
</script>

<section id="lang" class="text-gray-300 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-rose-400"
      >
        Supported Languages
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        We offer support for multiple languages so you aren't restricted to a
        single runtime.
      </p>
    </div>
    <div class="flex flex-wrap -m-4 justify-center text-center">
      {#each languages as lang}
        <a
          href={lang.link}
          target="_blank"
          rel="noreferrer noopener"
          class="p-4 md:w-1/4 sm:w-1/2 w-full"
        >
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <i class="{lang.icon} {lang.css} text-6xl" />
            <h2 class="title-font font-medium text-3xl text-rose-400">
              {lang.title}
            </h2>
            <p class="leading-relaxed">
              {lang.supported ? "Fully Supported" : "Coming Soon"}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
