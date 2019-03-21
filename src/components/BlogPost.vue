<script>
export default {
  BlogPost: {
    //template: "<h1><slot></slot></h1>",
    render: function(createElement) {
      var header = this.$slots.header;
      var body = this.$slots.default;
      var footer = this.$slots.footer;
      return createElement("div", [
        createElement("header", header),
        createElement("main", body),
        createElement("footer", footer)
      ]);
    }
  }
};
</script>