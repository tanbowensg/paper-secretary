<template src="./landing-page.html">
</template>

<script src="./landing-page.js">
</script>

<style lang="scss">
@import '../../style/color.scss';

body {
  margin: 0;
  padding: 0;
  overflow: visible;
  color: $black-dark;
  font-family: -apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Arial Nova", "Segoe UI", "Helvetica Neue", ".PingFang SC", "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "Hiragino Sans GB", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#navbar {
  display: flex;
  flex: 0 0 auto;
  height: 32px;
  .tab {
    height: 32px;
    padding: 0 5px;
    line-height: 32px;

    font-size: 16px;
    cursor: pointer;
    &.active {
      cursor: default;
      background: $white-dark;
    }
  }
}

.main {
  flex: 1 1 auto;
  height: 100%;
  margin: 20px;
  margin-bottom: 0;
}

.convert-area {
  display: flex;
  #origin-area, #result-area {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    height: 100%;
    width: 50%;
    h4 {
      flex: 0 0 auto;
      margin: 5px;
      font-size: 16px;
      text-align: center;
    }
    #origin-text, #result-text {
      flex: 1 1 auto;
      padding: 3px;

      color: $black-dark;
      border: 1px solid $grey-light;
      font-size: 16px;
      line-height: 1.5;
      outline: none;
      resize: none;
    }
  }
  .convert {
    position: relative;
    flex: 0 0 auto;
    width: 60px;
    margin: 10px;

    text-align: center;
    .convert-button {
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%); 
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
}

footer {
  flex: 0 0 auto;
  line-height: 48px;
  font-size: 13px;
  color: $white-dark;
  text-align: center;
}

</style>
