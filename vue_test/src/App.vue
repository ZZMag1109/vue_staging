<template>
  <div v-html="str"></div>
  <!-- <div class="layout-ui">
    <el-button @click="showDialog">弹出框</el-button>
    <el-dialog
       title="提示"
      :visible.sync="dialogVisible"
      v-if="dialogVisible">
      <water-mark />
    </el-dialog>
  </div> -->
</template>

<script>
import waterMark from './components/waterMark/waterMark.vue';
export default {
  components: { waterMark },
  name: "App",
  data() {
    return {
      dialogVisible: false,
      str1: "<span>11111111</span>",
      str: "留学讲座策划书 \n <div style='padding:10px 5px 0px 20px;margin:10px 0px 0px -15px'>1. 津桥留学讲'座策'划书</div>2. 出国留学讲座策划书 3. 留学讲座策划书 4. 留学讲座策划书 1、津桥留学讲座策划书 一、讲座背景 金融危机过后，国际经济环境紧张，人名币对美元，欧元等留学热国的汇率上升，留 学经费的减少使更多大学生想要留学，去哪学，学什么，该怎么准备成为同学们关心 的问题。同时，许多大学生对国外的文化风俗缺乏了解，渴望有机会体验国外的文化。 二、讲座主题 改变—机会，重塑你的人生拼图 三、讲座时间及地点 时间：9 月 22 日 13：30 及 9 月 24 日 14：00 地点：C504 及 D311 四、参与对象 对象：浙江工商大学群体学生，其中以大一大二年级为主 五、主讲人及主讲内容 津桥留学机构专业讲师 主讲内容： 1）、观看英国励志电影，介绍英国风俗文化及旅游名胜 2）、如何选择合适自己的学校，留学英美要什么花费。 3）、留学申请成功经验分享，回答现场同学关于留学方面的提问。 六、前期筹备 1、场地申请 2、前期宣传 （1）制作横幅，挂于行云、流水食堂宣传 （2）通过海报及宣传单来进行全面的宣传，在流水、行云食堂大门摆设海报，各寝室 宣传栏张贴宣传单，并下寝室和教室进行面对面宣传 （3）对大三大四的寝室进行重点宣传，回答同学们提出的各类有关于讲座的问题。 3、讲座现场 PPT 的制作 七、活动现场 1、现场布置",
    };
  },
  methods: {

        showDialog() {
            this.dialogVisible = true;
            // waterMark.set("水印内容", this.$refs.container);
        },
    // 转义
    HTMLEncode(html) {
      let temp = document.createElement("div");
      // div 也可替换pre
      temp.textContent != null
        ? (temp.textContent = html)
        : (temp.innerText = html);
      const output = temp.innerHTML;
      temp = null;
      return output;
    },

    // 反转义
    HTMLDecode(text) {
      if (text === null || text === undefined || text === "") {
        // 也可以
        if (!text) return "";
      }
      if (typeof text !== "string") {
        return String(text);
      }
      let temp = document.createElement("div");
      // div 也可替换pre
      temp.innerHTML = text;
      const output = temp.textContent || temp.innerText;
      temp = null;
      return output;
    },

    html_encode(str) 
    { 
        var s = ""; 
        if (str.length == 0) return ""; 
        s = str.replace(/&/g, "&amp;"); 
        s = s.replace(/</g, "&lt;"); 
        s = s.replace(/>/g, "&gt;"); 
        s = s.replace(/ /g, "&nbsp;"); 
        s = s.replace(/\'/g, "&#39;"); 
        s = s.replace(/\"/g, "&quot;"); 
            s = s.replace(/\n/g, "<br/>"); 
        return s; 
    }, 


    // 判断转换的html字符串是否是完整的，通过v-html可以转换的字符串
    // ---------检测不出只有一边是闭合的情况
    judgeHtmlStr(str) {
      const reg = new RegExp(/<([a-z][\s\S]*)>.*<\/\1>/i);
      const isHtml = reg.test(str);
      console.log(222, isHtml);
      // if (!isHtml) {
      //   // const replaceReg = new RegExp(/<[^>]+>/gi);
      //   // str.replace(replaceReg, "");
      //   this.str = this.html_encode(str)
      // }
      // // console.log(111, str);
      // return str;
    },

    // 判断html字符串是否完整
    judgeHtml(str) {
      let startNum = 0;
      let endNum = 0;
      const startChar = '<';
      const endChar = '>';
      startNum = (str.match(new RegExp(startChar, "g")) || []).length
      endNum = (str.match(new RegExp(endChar, "g")) || []).length
      return startNum === endNum
    },

    // 判断字符串是否是html模版字符串
    // 检测不出多层的标签是否闭合
    isHtml(str) {
      return /<[a-z]+\d?(\s+[\w-]+=("[^"]*"|'[^']*'))*\s*\/?>|&#?\w+;/i.test(str);
    },

    checkHtml(htmlStr) {
    var  reg = /<div |<span/g;
    return reg.test(htmlStr);
   },

  //  判断字符串里的html字符串是否是可以被正常解析的
  isCommonStr(str) {
    let s = "";
    const el = document.createElement('div');
    el.innerHTML = str;
    const html = el.innerHTML;
    s = html.replace(/\"/g, "'");
    console.log(222, str);
    console.log(333, s);
    return str === s
  },

   re(data) {
    let tag = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code','col', 'colgroup', 'datalist', 'dd', 'del', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame','head', 'header', 'hgroup', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'iframe', 'ins', 'label', 'legend', 'li', 'map', 'mark', 'menu', 'meter', 'nav', 'noscript','object', 'ol', 'outgroup', 'option', 'output', 'p', 'pre', 'html', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'span','strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'u', 'ul', 'var', 'video', 'wbr']
    //清除标签中内容、换行符
    data = data.replace(/.*?(<.*>).*/g, '$1').replace(/[\r\n]/g, '').replace(/\s+.*?>/g, '>')
    //排除无内容元素
    data = data.replace(/<(img|br|hr|input|link|meta|area|base|col|command|embed|keygen|param|source|track|wbr).*?>/g, '')
    //清除非标签元素，替换标签为()的形式，例如：<div>替换为(、</div>替换为)
    data = data.replace(/>.*?</g, '><').replace(/<[^\/].*?>/g, '(').replace(/<\/.*?[^<]>/g, ')')
    //判断()是否为偶数
    console.log(data.length, data.length & 2);
    debugger
    if (data.length % 2 != 0) {
        return false
    }
    //循环删除()直至没有()或者为空
    while (data.length) {
        let temp = data
        let i = 0
        while (i < tag.length) {
            let key = '<' + tag[i] + '></' + tag[i] + '>'
            data = data.replace(new RegExp(key, 'g'), '')
            i++
        }
        if (data == temp) {
            return false
        }
    }
    return true
},

  //  myCheck(str) {
  //    const tag = ['div', 'span', 'p', 'img', 'br']
  //    for (let i = 0; i < str.length - 1; i++ ) {
  //      let key = 
  //    }
  //  }
  },
  mounted() {
    // const isHtml = this.checkHtml(this.str);
    // console.log(111, isHtml);
    // this.judgeHtmlStr(this.str)
    // const test = this.isHtml(this.str);
    // console.log(333, test);
    const test = this.isCommonStr(this.str);
    console.log(111, test);
  },
};
</script>

<style>
.layout-ui{
  width: 100px;
  height: 100px;
    }
</style>