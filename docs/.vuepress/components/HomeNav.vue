<template>
  <div class="navs">
    <div v-for="(item, key) in list[$lang]" class="itemWrap">
      <div class="item">
        <h2>{{ item.title }}</h2>
        <ul>
          <li v-for="(link, linkKey) in item.children.slice(0, maxLen)">
            <a v-bind:href="link.link">{{ link.title }}</a>
          </li>
          <li v-if="item.children.length > maxLen" class="viewMore">
            <a v-bind:href="item.children[0].link">View More</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import categories from "../nav/categories";
export default {
  data() {
    return {
      list: categories,
      maxLen: 5,
    };
  },
  beforeMount() {
    // console.log(this.$site, categories[this.$lang])
  },
  mounted: function () {},
};
</script>

<style lang="stylus">
.navs {
  width: 100%;
  display: flex;
  font-size: 32px;
  flex-wrap: wrap;
  padding: 2rem 0;

  .itemWrap {
    width: 33.3333%;
    margin-bottom: 1rem;
  }

  .item {
    height: 280px;
    margin: 0 .5rem;
    background: #ffffff;
    padding: 1.5rem 1.75rem;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02), 0px 4px 32px rgba(0, 0, 0, 0.02);
    h2 {
      font-size: 1.125rem;
      color: $b88;
      line-height: 1.625rem;
      padding-bottom: 1rem;
      margin: 0;
      border-bottom: 1px solid #ebebeb;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0 0 0;

      li {
        font-size: 0.875rem;
        line-height: 1.375rem;
        margin-bottom: 0.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        a {
          font-family: Roboto;
          font-weight: 400;
          color: $b64

          &:hover {
            color: $activeLink;
          }
        }
      }

      .viewMore {
      }

      li:last-child {
        margin: 0;
      }
    }
  }
  .item:nth-child(3n+2)  {
    margin: 0 1rem;
  }

  .item:hover {
    border: 1px solid #EBEBEB;
  }
}

@media (max-width: $MQMobile) {
  .navs {
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;

    .itemWrap {
      width: 100%;

      .item {
        border-radius: 0.5rem;
        margin: 0 0 1rem 0;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    // background-color: #fff;
    box-sizing: border-box;
  }

  .item {
    width: 100%;
  }
}
</style>
