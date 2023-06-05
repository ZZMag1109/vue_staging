<template>
  <!-- <div v-html="str"></div> -->
  <!-- <div class="layout-ui">
    <el-button @click="showDialog">弹出框</el-button>
    <el-dialog
       title="提示"
      :visible.sync="dialogVisible"
      v-if="dialogVisible">
      <water-mark />
    </el-dialog>
  </div> -->
  <!-- <div>
    <DiffJSON />
  </div> -->
  <!-- <div>
		<button>原生的按钮</button>
		<input type="text">
		<atguigu-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</atguigu-row>
		<atguigu-date-picker
      type="date"
      placeholder="选择日期">
    </atguigu-date-picker>
		<atguigu-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-s-check" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</atguigu-row>
  </div> -->
  <Highlighter />
</template>

<script>
import waterMark from './components/waterMark/waterMark.vue';
import DiffJSON from './components/DiffJSON.vue';
import Highlighter from "./components/highlighter/index.vue";

export default {
  components: { waterMark, DiffJSON, Highlighter },
  name: "App",
  data() {
    return {
      dialogVisible: false,
      str1: '<span>\n\n\t\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n\t\t<title>Highcharts Example</title>\n\n\t\t\x3Cscript type="text/javascript" src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js">\x3C/script>\n\t\t<style type="text/css">\n${demo.css}\n\t\t</style>\n\t\t\x3Cscript type="text/javascript">\n$(function () {\n    $(document).ready(function () {\n        Highcharts.setOptions({\n            global: {\n                useUTC: false\n            }\n        });\n\n        $(\'#container\').highcharts({\n            chart: {\n                type: \'spline\',\n                animation: Highcharts.svg, // don\'t animate in old IE\n                marginRight: 10,\n                events: {\n                    load: function () {\n\n                        // set up the updating of the chart each second\n                        var series = this.series[0];\n                        setInterval(function () {\n                            var x = (new Date()).getTime(), // current time\n                                y = Math.random();\n                            series.addPoint([x, y], true, true);\n                        }, 1000);\n                    }\n                }\n            },\n            title: {\n                text: \'Live random data\'\n            },\n            xAxis: {\n                type: \'datetime\',\n                tickPixelInterval: 150\n            },\n            yAxis: {\n                title: {\n                    text: \'Value\'\n                },\n                plotLines: [{\n                    value: 0,\n                    w<span style="color: red">id</span>th: 1,\n                    color: \'#808080\'\n                }]\n            },\n            tooltip: {\n                formatter: function () {\n                    return \'<b>\' + this.series.name + \'</b><br/>\' +\n                        Highcharts.dateFormat(\'%Y-%m-%d %H:%M:%S\', this.x) + \'<br/>\' +\n                        Highcharts.numberFormat(this.y, 2);\n                }\n            },\n            legend: {\n                enabled: false\n            },\n            exporting: {\n                enabled: false\n            },\n            series: [{\n                name: \'Random data\',\n                data: (function () {\n                    // generate an array of random data\n                    var data = [],\n                        time = (new Date()).getTime(),\n                        i;\n\n                    for (i = -19; i <= 0; i += 1) {\n                        data.push({\n                            x: time + i * 1000,\n                            y: Math.random()\n                        });\n                    }\n                    return data;\n                }())\n            }]\n        });\n    });\n});\n\t\t\x3C/script>\n\t\n\t\n\x3Cscript src="http://cdn.hcharts.cn/highcharts/highcharts.js">\x3C/script>\n\x3Cscript src="http://cdn.hcharts.cn/highcharts/modules/exporting.js">\x3C/script>\n\n<div <span="" style="color: red">id="container" style="min-w<span style="color: red">id</span>th: 310px; height: 400px; margin: 0 auto"></div>\n\n\t\n</</span>',
      str: `<span>{<span class="xt-key">"busId":</span><span class="xt-number">2981</span>,<span class="xt-key">"contentType":</span><span class="xt-number">6</span>,<span class="xt-key">"auditType":</span><span class="xt-number">0</span>,<span class="xt-key">"layoutId":</span></span><span style='background-color:yellow'><span class="xt-string">"</span><span>4</span><span style='background-color:yellow'>"</span></span><span>,<span class="xt-key">"name":</span><span class="xt-string">"quark网盘图片可视化模板"</span>,<span class="xt-key">"value":</span><span class="xt-string">"[{\\"name\\":\\"slot-1\\",\\"componentList\\":[{\\"value\\":{\\"span\\":\\"24\\",\\"isShowPartition\\":false,\\"imgHoverMaxWidth\\":\\"400\\",\\"imgHoverMaxHeight\\":\\"500\\",\\"delay\\":\\"300\\",\\"isShowTitle\\":false,\\"isShowKeywordTip\\":true,\\"isBold\\":false,\\"fontColor\\":\\"#333\\",\\"backgroundColor\\":\\"rgba(255,&ensp;255,&ensp;255,&ensp;0)\\",\\"linkJump\\":\\"</span><span style='background-color:yellow'>none</span><span>\\",\\"infoConfig\\":[\\"id\\",\\"userId\\",\\"user\\",\\"module\\",\\"skillGroup\\",\\"history\\",\\"machineResult\\",\\"IP\\",\\"IMEI\\",\\"ocr\\",\\"createTime\\",\\"publicTime\\"],\\"copyId\\":true,\\"qualityConfig\\":[\\"qaNote\\",\\"isTypical\\",\\"isIgnoreDiff\\"],\\"functionConfig\\":[</span><span>]},\\"componentName\\":\\"xtPicture\\",\\"name\\":\\"图片审核\\"}]}]"</span>,<span class="xt-key">"moduleId":</span></span><span style='background-color:yellow'>[]</span><span>,<span class="xt-key">"skillGroupId":</span></span><span style='background-color:yellow'>[]</span><span>,<span class="xt-key">"moduleName":</span><span class="xt-string">""</span>}</span>`
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
    // const test = this.isCommonStr(this.str);
    // console.log(111, test);
  },
}
</script>

<style>
.layout-ui {
  width: 100px;
  height: 100px;
}
</style>