<!-- <!DOCTYPE html> -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    %cayo.title%
    %cayo.css%    
    %cayo.head%
  </head>
  <body>
    <div class="test">testing template preprocessor</div>
    {#if process.env.NODE_ENV === 'development'}
      hell yeah
    {/if}
    <!-- 
      TODO: Show how to condtionally render any of these pieces based on dev vs. prod
      E.g., I need to remove head from prod, but want it there in dev
    -->
    %cayo.body%
    %cayo.script%
  </body>
  
</html>


<style lang="scss">
  $test: red;
  .test {
    color: $test;
  }
</style>