<script>
  import { Cayo } from 'cayo';
  const Test = './Test.cayo.svelte';
</script>

<Cayo src="./Test.cayo.svelte" howdy="there cowboy" other={() => console.log('howdy')}/>
<!-- <Cayo src={Test}>
  Cayo Component: {Test}
</Cayo> -->