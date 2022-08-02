<script>
  import Cayo from 'cayo/component';
  // console.log('howdy', Cool);
  const str = "../components/some/Cool.cayo.svelte";
</script>

howdyyy
<br><a href="/">Back</a>
<Cayo src="../components/Cool.cayo.svelte" />
<Cayo src={str} />
<Cayo okay={"str"} />
<!-- <Cayo src={"../components/some/Cool.cayo.svelte"} /> -->

<!-- <slot name="entry">
  <script src="/main2.js" data-cayo-entry />
</slot> -->