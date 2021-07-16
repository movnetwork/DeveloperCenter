<template>
  <main class="page">
    <slot name="top" />
    <div ref="content" :style="{'margin-left':contentWidth+'px'}">
      <Content class="theme-default-content" />
    </div>
    <PageEdit :marginLeft="contentWidth"/>

    <PageNav v-bind="{ sidebarItems }" :marginLeft="contentWidth"/>

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import debounce from 'lodash/debounce'

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  data() {
    return {
      contentWidth: 0,
    };
  },
  mounted(){
    this.judgeWidth()
    window.onresize = debounce(this.judgeWidth,200)
  },
  methods:{
    judgeWidth(){
      let adaptMargin = (this.$refs.content.offsetWidth - 820)/2 
      this.contentWidth = adaptMargin < 0? 0 : adaptMargin > 100? 100: adaptMargin
    }
  }
};
</script>

<style lang="stylus">
.page {
  padding-left: $sidebarWidth;
  padding-bottom: 2rem;
  margin-top: $navbarHeight;
  display: block;


  .theme-default-content.content__default {
    overflow: hidden;
    // margin-left: 10%;
  }

  .theme-default-content {
    max-width: $contentWidth;
    padding: 2rem 2.5rem;

    a:hover {
      text-decoration: underline;
    }

    p.demo {
      padding: 1rem 1.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    img {
      max-width: 100%;
    }
  }
}

@media (max-width: $MQNarrow) {
  .page {
    padding-left: $narrowSidebarWidth;
    .theme-default-content {
      padding 2rem 1.5rem 
    }
  }
}

@media (max-width: $MQMobile) {
  .page {
    padding-left: 0;
  }
}
</style>
