<!-- <script context="module">
  export const meta = {
    title: 'Home',
  };
</script> -->
<script>
  import Some from '../components/Some.svelte';
  import Uhh from '../components/Uhh.svelte';
  import Test from '../components/Test.svelte';
  import help from '../help.js';
  import { Cayo, Entry } from 'cayo';
  import Docs from '../components/docs.md';
  import Lib from '../../lib/lib.svelte';


  // resolveImports('some');
</script>
<!-- <svelte:head>
  <title>Home</title>
</svelte:head> -->
<Docs />

<Lib />

<Cayo src="Cool.cayo.svelte" cool="very cool" do={() => console.log('im not gonna work')}>
  I'm not cool
</Cayo>
<Cayo src="../src/components/Huh.cayo.svelte" cool="even cooler" do={() => console.log('im not gonna work')}>
  I'm super not cool
</Cayo>
<!-- <Some /> -->

I'm index howdy ok<br>
<a href="/howdy/" class="some global">Howdy</a><br>
<a href="/hey/" class="red">Hey</a>
<a href="/some/page/" class="red">Some</a>
<!-- <Uhh /> -->
<lol>
  I'm svelte-preprocess
  <img src="@base/images/app-icon.png" alt="">
  <Entry src="index.js" />
  <!-- <slot>
    <script src="index.js" data-cayo-entry />
  </slot> -->
  testReplace
</lol>
<!-- <Cayo name="Test" object={{ some: 'what?$staticlink$'}}><div>Default Content</div></Cayo>

<Cayo name="Cool" beans='ayo'>Whaaat</Cayo>
<Cayo name="Cool" beans='beeeeaaaaasnnss' />
<Cayo name="Cool" beans='NOT BEANS' /> -->



<style lang="scss">
  $test: red;
  :global(.some) {
    color: $test;
  }
  .red {
    color: $test;
    &:visited {
      color: $test;
    }
  }
  img {
    width: 50px;
  }
</style>