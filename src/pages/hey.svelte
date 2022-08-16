<script>
  import Cayo from 'cayo/component'
</script>

<Cayo src="Cool.cayo.svelte" />

yessir
<br><a href="/">Back</a>

<style>
  br {
    display: block;
  }
</style>

<slot name="entry">
  <script src="/index.js" data-cayo-entry />
</slot>