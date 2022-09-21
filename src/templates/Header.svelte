<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faDiscord } from '@fortawesome/free-brands-svg-icons'
</script>

<div class="border-b border-rose-400">
    <div class="navbar bg-base-100 container mx-auto mt-4">
        <div class="navbar-start">
            <a href="/" class="ml-4 font-bold normal-case text-xl">Call of Duty API</a>
        </div>
        <div class="navbar-end">
            <a href="https://discord.gg/NuUpvzC" target="_blank" rel="noopener noreferrer" class="ml-4 btn btn-sm btn-info bg-rose-400 border-rose-400 hover:border-rose-600 hover:bg-rose-600 rounded-sm">
                <Fa icon={faDiscord} class="mr-1" />
                Discord
            </a>
        </div>
    </div>
</div>