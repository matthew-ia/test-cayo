<script>
  import { Cayo } from 'cayo';
  // console.log('howdy', Cool);
  const str = "some/Cool.cayo.svelte";
  const str2 = "some/Cool.cayo.svelte";
</script>

howdyyy
<br class="bro"><a href="/">Back</a>
<Cayo src="Cool.cayo.svelte" />
<Cayo src={str} />
<Cayo src={str2} />

<!-- <Cayo src={str} />
<Cayo okay={"str"} /> -->
<!-- <Cayo src={"../components/some/Cool.cayo.svelte"} /> -->

<slot name="entry">
  <script src="main2.js" data-cayo-entry />
</slot>

<style>
  .bro {
    color: red;
  }
</style>