<template>
  <div v-html="str"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      str1: "留学讲座策划书<div style='padding:10px 5px 0px 20px;margin:10px 0px 0px - 15px;1. 津桥留学讲座策划书",
      str: "留学讲座策划书 <div style='padding:10px 5px 0px 20px;margin:10px 0px 0px - 15px;1. 津桥留学讲座策划书 2. 出国留学讲座策划书 3. 留学讲座策划书 4. 留学讲座策划书 1、津桥留学讲座策划书 一、讲座背景 金融危机过后，国际经济环境紧张，人名币对美元，欧元等留学热国的汇率上升，留 学经费的减少使更多大学生想要留学，去哪学，学什么，该怎么准备成为同学们关心 的问题。同时，许多大学生对国外的文化风俗缺乏了解，渴望有机会体验国外的文化。 二、讲座主题 改变—机会，重塑你的人生拼图 三、讲座时间及地点 时间：9 月 22 日 13：30 及 9 月 24 日 14：00 地点：C504 及 D311 四、参与对象 对象：浙江工商大学群体学生，其中以大一大二年级为主 五、主讲人及主讲内容 津桥留学机构专业讲师 主讲内容： 1）、观看英国励志电影，介绍英国风俗文化及旅游名胜 2）、如何选择合适自己的学校，留学英美要什么花费。 3）、留学申请成功经验分享，回答现场同学关于留学方面的提问。 六、前期筹备 1、场地申请 2、前期宣传 （1）制作横幅，挂于行云、流水食堂宣传 （2）通过海报及宣传单来进行全面的宣传，在流水、行云食堂大门摆设海报，各寝室 宣传栏张贴宣传单，并下寝室和教室进行面对面宣传 （3）对大三大四的寝室进行重点宣传，回答同学们提出的各类有关于讲座的问题。 3、讲座现场 PPT 的制作 七、活动现场 1、现场布置 ",
    };
  },
  methods: {
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
      debugger
      temp = null;
      return output;
    },

    // 判断转换的html字符串是否是完整的，通过v-html可以转换的字符串
    judgeHtmlStr(str) {
      const reg = new RegExp(/<([a-z][\s\S]*)>.*<\/\1>/i);
      const isHtml = reg.test(str);
      console.log(222, isHtml);
      if (!isHtml) {
        const replaceReg = new RegExp(/<[^>]+>/gi);
        str.replace(replaceReg, "");
      }
      console.log(111, str);
      return str;
    },
  },
  mounted() {
    // this.judgeHtmlStr(this.str1);
    const html = this.HTMLDecode(this.str1);
    console.log(111, html);
    const str = this.HTMLEncode(html);
    console.log(222, str);
  },
};
</script>

<style>
.box{
    background-color: aqua;
    }
</style>