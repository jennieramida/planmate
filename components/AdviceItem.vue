<template>
  <div class="boxwhite _mgbt-2px">

    <div class="bio-card -horizontal">
      <div class="bio-card-content _pdh-12px _pdt-24px _tal-l helve _fw-300 _fs-7">
        <div class="_pdbt-12px">
          {{content}}
        </div>
        <div class="bio-textarea _pdt-8px">
              <textarea rows="2" placeholder="Give an advice!"></textarea>
        </div>
        <div class="bio-accordion">
          <input :id="id" type="checkbox">
          <label :for="id">
            <div class="_fs-7 _tal-r _pdt-24px">
              {{comment}} comments
            </div>  
          </label>
          <div class="bio-accordion-content">
          <div>Item A</div>
          <div>Item B</div>
          <div>Item C</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        props: ['content','comment','id']
    }
</script>

<style scoped>
.bio-card:not(.u-rise) {
    border: 0px solid rgba(230,230,230,0.8);
}

.comment{
  background-color: lightgray;
  padding-top: 1px;
}
</style>
