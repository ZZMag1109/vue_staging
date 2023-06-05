<template>
  <div v-html="str2"></div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      str: "<span><div11111,ssss</span>",
      str2: "<span><div11111,ssss</div></span>",
    };
  },
  methods: {
    // isHtml() {
    //   const reg = new RegExp(/^<([a-zA-Z]+)>[\s\S]*?</\1 > $ /);
    // },

    html_encode(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&/g, "&gt;");
      s = s.replace(/</g, "&lt;");
      s = s.replace(/>/g, "&gt;");
      s = s.replace(/ /g, "&nbsp;");
      s = s.replace(/\'/g, "'");
      s = s.replace(/\"/g, "&quot;");
      s = s.replace(/\n/g, "<br>");
      return s;
    },

    //HTML标签反转义（&lt; -> <）

    escape2Html(str) {
      try {
        var temp = document.createElement("div");

        temp.innerHTML = str;

        var output = temp.innerText || temp.textContent;

        temp = null;

        return output;
      } catch (error) {
        console.log(222, err);
      }
    },

    closeHTML(str) {
      var arrTags = [
        "div",
        "span",
        "font",
        "b",
        "u",
        "i",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "li",
        "ul",
        "table",
      ];
      for (var i = 0; i < arrTags.length; i++) {
        var intOpen = 0;
        var intClose = 0;
        var re = new RegExp("\\<" + arrTags[i] + "( [^\\<\\>]+|)", "ig");
        debugger;
        var arrMatch = str.match(re);
        if (arrMatch != null) intOpen = arrMatch.length;
        re = new RegExp("\\<\\/" + arrTags[i] + "\\>", "ig");
        arrMatch = str.match(re);
        if (arrMatch != null) intClose = arrMatch.length;
        for (var j = 0; j < intOpen - intClose; j++) {
          str += "</" + arrTags[i] + ">";
        }
        /*for(var j=(intOpen-intClose-1);j>=0;j--){
str+="</"+arrTags[i]+">";
}*/
      }
      return str;
    },
  },
  mounted() {
    // this.str = this.html_encode(this.str);
    // console.log(this.str);
    // const a = this.escape2Html(this.str);
    const a = this.closeHTML(this.str);
    console.log(111, a);
  },
};
</script>

<style>
</style>