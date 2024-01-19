<script lang="ts">
    import adventure from '$lib/images/adventure-plan.svg';
</script>

<svelte:head>
    <title>Coming Soon</title>
</svelte:head>

<section>
    <div class="information">
        <header>
            <h1>Camp Concierge</h1>
            <p class="subheading">Returning valuable time to parents</p>            
        </header>
        <!-- <p class="mission-statement">Our mission is to create a one stop shop where parents or guardians can easily enroll their children in camps.</p> -->
    </div>
    
    <div class="image-container">
        <img alt="two people planing an adventure in a sandbox" src={adventure}/>
    </div>

    <div class="mission-statement-container">
        <h2>Coming Soon</h2>
        <p class="mission-statement">Our mission is to create a one stop shop where parents or guardians can easily enroll their children in camps.</p>
    </div>
</section>

<style lang="postcss">
    section {
        --split-pct: 60%;
        --sky-top: var(--indigo-5);  
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
        height: 100%;
        
        /* display: flex;
        flex-flow: row wrap; */
        
    }    

    .information header, .image-container img, .mission-statement-container .mission-statement {
        inline-size: min(calc(100% - var(--size-2)), 768px); 
        margin-inline: auto;            
    }

    .information {
        background-color: var(--sky-top);
        flex: none;
    }

    .image-container {
        flex: none;
        background: linear-gradient(0deg, var(--brown-3) 0%, var(--brown-4) var(--split-pct), var(--violet-3) var(--split-pct), var(--sky-top) 100%);
    }

    .mission-statement-container {
        flex: 1;
        background-color: var(--brown-4);
        padding-inline: var(--size-4);
        padding-top: var(--size-8)       
    }

    img {
        max-width: 650px;
    }

    header {
        text-align: center;
    }

    h1 {
        color: var(--brand);                 
    }

    header h1, header .subheading {
        margin-inline: auto;
    }

    .subheading {
        font-size: var(--font-size-4);
        color: var(--brand);
        padding-top: var(--size-4);
    }

    .mission-statement-container h2 {
        text-align: center;
        padding-bottom: var(--size-4);
        margin-inline: auto;
    }

    .mission-statement{
        max-inline-size: var(--size-content-3);
        color: var(--text-1);              
        padding-inline: var(--size-4);
        text-align: center;             
    }
</style>