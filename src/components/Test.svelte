<script>
  import Cayo from 'cayo/component';
  const Test = './Test.cayo.svelte';
</script>

<Cayo src="./Test.cayo.svelte" howdy="there cowboy" />
<Cayo src={Test}>
  Cayo Component: {Test}
</Cayo>